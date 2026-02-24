import { Radio, Clock, Calendar } from 'lucide-react';
import { streams } from '../data/mockData';
import { StreamCard } from '../components/StreamCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

export function Streaming() {
  const liveStreams = streams.filter(s => s.isLive);
  const upcomingStreams = streams.filter(s => !s.isLive);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Streaming</h1>
        <p className="text-gray-600">Aprende en vivo con nuestros expertos y participa en sesiones interactivas</p>
      </div>

      <Tabs defaultValue="live" className="space-y-6">
        <TabsList>
          <TabsTrigger value="live">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              En vivo ({liveStreams.length})
            </div>
          </TabsTrigger>
          <TabsTrigger value="upcoming">
            Próximos ({upcomingStreams.length})
          </TabsTrigger>
          <TabsTrigger value="all">Todos</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          {liveStreams.length > 0 ? (
            <>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <Radio className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Streams en vivo ahora</h3>
                  <p className="text-sm text-red-700">Únete a las sesiones en vivo y aprende en tiempo real</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveStreams.map(stream => (
                  <StreamCard key={stream.id} stream={stream} />
                ))}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-200">
              <Radio className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 mb-2">No hay streams en vivo en este momento</p>
              <p className="text-sm text-gray-400">Revisa los próximos streams programados</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          {upcomingStreams.length > 0 ? (
            <>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Próximos streams</h3>
                  <p className="text-sm text-blue-700">Marca tu calendario para no perderte estas sesiones</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingStreams.map(stream => (
                  <StreamCard key={stream.id} stream={stream} />
                ))}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-200">
              <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No hay streams programados</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streams.map(stream => (
              <StreamCard key={stream.id} stream={stream} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
