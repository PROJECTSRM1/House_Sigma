import { Card, CardContent } from "@/components/ui/card";

interface ReportCardProps {
  image: string;
  title: string;
  description: string;
}

const ReportCard = ({ image, title, description }: ReportCardProps) => {
  return (
    <Card className="overflow-hidden rounded-[18px] border border-gray-200 shadow-sm hover:shadow-md transition">
      
      {/* REDUCED IMAGE HEIGHT */}
      <div className="h-[300px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <CardContent className="p-5">
        <h3 className="text-[18px] font-semibold text-[#111] mb-2">
          {title}
        </h3>

        <p className="text-[15px] text-[#555] leading-[22px]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ReportCard;
