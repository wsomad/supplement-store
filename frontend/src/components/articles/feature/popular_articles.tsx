import { Article } from "@/types/articles";
import ArticleCard from "../ui/card/article_card";
import { Button } from "@/components/ui/button";

const PopularArticles: React.FC = () => {
    const articles: Article[] = [
        {
            title: "Article 1",
            description: "Description regarding fitness",
            topic: "Nutrition",
            image: "/images/articles/thumbnail1.png"
        },
        {
            title: "Article 2",
            description: "Description regarding nutrition",
            topic: "Nutrition",
            image: "/images/articles/thumbnail1.png"
        },
        {
            title: "Article 3",
            description: "Description regarding nutrition",
            topic: "Nutrition",
            image: "/images/articles/thumbnail1.png"
        },
        {
            title: "Article 4",
            description: "Description regarding nutrition",
            topic: "Nutrition",
            image: "/images/articles/thumbnail1.png"
        },
    ];

    return (
        <div className="mt-16">
            <h1 className="text-xl font-semibold mb-4">Published Articles</h1>
            <div className="container-snap w-full mx-auto flex overflow-x-auto gap-4 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-6 lg:gap-6 xl:gap-6 scrollbar-hide">
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article}/>
                ))}
            </div>
            <Button className="w-full p-6 mt-6" variant={"outline"}>View All Articles</Button>
        </div>
    );
}

export default PopularArticles;