import { Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router';
import { Community } from '../data/mockData';
import { Button } from './ui/button';

interface CommunityCardProps {
  community: Community;
}

export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      <img src={community.thumbnail} alt={community.name} className="w-full h-40 object-cover" />
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg">{community.name}</h3>
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
            {community.category}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{community.description}</p>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {community.members.toLocaleString()} miembros
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            {community.posts.toLocaleString()} posts
          </span>
        </div>

        <div className="flex gap-2">
          <Link to={`/communities/${community.id}`} className="flex-1">
            <Button variant="outline" className="w-full">Ver comunidad</Button>
          </Link>
          {!community.isJoined && (
            <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Unirse</Button>
          )}
        </div>
      </div>
    </div>
  );
}
