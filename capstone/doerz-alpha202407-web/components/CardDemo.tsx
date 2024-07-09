import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

function CardDemo({}: Props) {
  return (
    <Card className="w-[220px]">
      <CardHeader>
        <CardTitle>Solana</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="mb-4">
            <Image
              src="https://placehold.co/400x300png"
              width={400}
              height={300}
              alt="card"
            />
          </div>
          <div>Card content</div>
        </div>
      </CardContent>
      <CardFooter className="">
        <p className="text-zinc-300 dark:text-zinc-700">Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default CardDemo;
