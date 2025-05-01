
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface GroupCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  memberCount: number;
  image?: string;
  visibility: "public" | "private" | "invite";
}

const GroupCard = ({ id, name, description, category, memberCount, image, visibility }: GroupCardProps) => {
  const visibilityMap = {
    public: { label: "Public", color: "bg-green-100 text-green-800" },
    private: { label: "Private", color: "bg-red-100 text-red-800" },
    invite: { label: "Invite Only", color: "bg-amber-100 text-amber-800" },
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
      {image && (
        <div className="w-full h-40 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{name}</CardTitle>
          <Badge variant="outline" className={`${visibilityMap[visibility].color} border-none`}>
            {visibilityMap[visibility].label}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-500">{category} • {memberCount} members</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button asChild variant="outline" size="sm">
          <Link to={`/group/${id}`}>View Group</Link>
        </Button>
        <Button size="sm" className="bg-grupmate-purple hover:bg-purple-600 text-white">Join</Button>
      </CardFooter>
    </Card>
  );
};

export default GroupCard;
