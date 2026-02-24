import { useParams, Link } from 'react-router';
import { ArrowLeft, Users, MessageSquare, Send } from 'lucide-react';
import { communities, posts } from '../data/mockData';
import { PostCard } from '../components/PostCard';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';

export function CommunityDetail() {
  const { id } = useParams();
  const community = communities.find(c => c.id === id);
  const communityPosts = posts.filter(p => p.communityId === id);

  if (!community) {
    return (
      <div className="p-6">
        <p>Comunidad no encontrada</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link to="/communities" className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver a comunidades
          </Link>

          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{community.name}</h1>
              <p className="text-lg mb-4 opacity-90">{community.description}</p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{community.members.toLocaleString()} miembros</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>{community.posts.toLocaleString()} posts</span>
                </div>
              </div>
            </div>

            {!community.isJoined && (
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Unirse a la comunidad
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {community.isJoined && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
            <h3 className="font-semibold mb-3">Crear una publicación</h3>
            <Textarea 
              placeholder="¿Qué quieres compartir con la comunidad?"
              className="mb-3 resize-none"
              rows={4}
            />
            <div className="flex justify-end">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Send className="w-4 h-4 mr-2" />
                Publicar
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Publicaciones recientes</h2>
          
          {communityPosts.length > 0 ? (
            <div className="space-y-4">
              {communityPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-200">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 mb-2">Aún no hay publicaciones</p>
              <p className="text-sm text-gray-400">Sé el primero en publicar en esta comunidad</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
