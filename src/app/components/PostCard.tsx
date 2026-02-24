import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Post } from '../data/mockData';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <Avatar>
          <AvatarImage src={post.authorAvatar} alt={post.author} />
          <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{post.author}</span>
            <Badge variant="secondary" className="text-xs">Nivel {post.authorLevel}</Badge>
          </div>
          <span className="text-xs text-gray-500">{post.timestamp}</span>
        </div>
      </div>

      <p className="text-sm text-gray-800 mb-4">{post.content}</p>

      <div className="flex items-center gap-6 text-sm text-gray-500">
        <button className={`flex items-center gap-2 hover:text-red-500 transition-colors ${post.isLiked ? 'text-red-500' : ''}`}>
          <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-purple-600 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
