import { hedvigLettersSerif } from "@/app/ui/fonts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function AcmeLogo() {
  return (
    <div
      className={`${hedvigLettersSerif.className} flex flex-row items-center font-bold uppercase leading-none tracking-wider text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-4xl">Acme</p>
    </div>
  );
}
