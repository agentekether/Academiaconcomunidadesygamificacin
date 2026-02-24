import { Eye, Play } from 'lucide-react';
import { Link } from 'react-router';
import { Stream } from '../data/mockData';
import { Badge } from './ui/badge';

interface StreamCardProps {
  stream: Stream;
}

export function StreamCard({ stream }: StreamCardProps) {
  return (
    <Link to={`/academy/streaming/${stream.id}`} className="block">
      <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 border border-emerald-500/20">
        <div className="relative">
          <img src={stream.thumbnail} alt={stream.title} className="w-full h-48 object-cover" />
          {stream.isLive && (
            <Badge className="absolute top-3 left-3 bg-emerald-500 text-white animate-pulse border-emerald-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                EN VIVO
              </span>
            </Badge>
          )}
          {stream.isLive && (
            <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {stream.viewers}
            </div>
          )}
          {!stream.isLive && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/90 flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <img src={stream.streamerAvatar} alt={stream.streamer} className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-medium text-white">{stream.streamer}</p>
              <p className="text-xs text-gray-400">{stream.category}</p>
            </div>
          </div>

          <h3 className="font-semibold mb-1 line-clamp-2 text-white">{stream.title}</h3>
          <p className="text-xs text-gray-400">{stream.startTime}</p>
        </div>
      </div>
    </Link>
  );
}