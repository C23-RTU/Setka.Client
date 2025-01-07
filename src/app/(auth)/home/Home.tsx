import { NotificationBadge } from '@/components/NotificationBadge/NotificationBadge';
import { PostCard } from '@/components/PostCard/PostCard';
import { Input } from '@/components/ui/input';

const Home = () => {
    return (
        <div className="page">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Доброе утро, Костя 👋</h1>
                <NotificationBadge />
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold">Лента</p>
                <div>
                    <Input placeholder="Поиск по ленте..." />
                </div>
                <div className="flex flex-col gap-10">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        </div>
    );
};

export default Home;
