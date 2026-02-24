import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { communities } from '../data/mockData';
import { CommunityCard } from '../components/CommunityCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Button } from '../components/ui/button';

export function Communities() {
  const [searchQuery, setSearchQuery] = useState('');

  const myCommunities = communities.filter(c => c.isJoined);
  const exploreCommunities = communities.filter(c => !c.isJoined);

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Comunidades</h1>
          <p className="text-gray-600">Conéctate con otros estudiantes y comparte conocimiento</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Crear comunidad
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">Todas las comunidades</TabsTrigger>
          <TabsTrigger value="my-communities">Mis comunidades ({myCommunities.length})</TabsTrigger>
          <TabsTrigger value="explore">Explorar</TabsTrigger>
        </TabsList>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar comunidades..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <TabsContent value="all" className="space-y-6">
          {filteredCommunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCommunities.map(community => (
                <CommunityCard key={community.id} community={community} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No se encontraron comunidades</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="my-communities" className="space-y-6">
          {myCommunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCommunities.map(community => (
                <CommunityCard key={community.id} community={community} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Aún no te has unido a ninguna comunidad</p>
              <p className="text-sm text-gray-400">Explora las comunidades y conéctate con otros estudiantes</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="explore" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCommunities.map(community => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
