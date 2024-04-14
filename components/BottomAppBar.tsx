import { CircleUser, MessageCircle } from "lucide-react";

export default function BottomAppBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 gap-3 bg-white p-3 mobile:flex md:hidden">
      <CircleUser size={50} />
      <MessageCircle size={50} />
    </div>
  );
}
