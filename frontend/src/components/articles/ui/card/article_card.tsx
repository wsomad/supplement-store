import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Article } from "@/types/articles";
import Image from "next/image";

interface ArticleProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleProps> = ({article}) => {
    return (
        <div>
            <Card className="relative min-w-[350px] border rounded-sm overflow-hidden group">
                {/* Article Image (Covers Whole Card) */}
                <div className="">
                    <Image
                        src={article.image || `/images/products/nutriversum.png`}
                        alt="Default avatar"
                        width={300} 
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Title & Description (Appears on Hover) */}
                <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-70 text-white flex flex-col justify-end items-start 
                            opacity-0 group-hover:opacity-100 transition-all duration-300 p-2">
                    <CardTitle className="text-md font-normal">{article.title}</CardTitle>
                    <CardDescription className="text-sm mt-1">{article.description}</CardDescription>
                </div>
            </Card>
        </div>
    );
}

export default ArticleCard;