
import Image from "next/image";

export default function Parceiros(){
    return (
        <section id="carrosel">

            <div className="relative w-full flex gap-4 py-6 overflow-x-hidden">
                <div className="flex gap-4 animate-marquee">
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/sala/20200813_115950.jpg" alt="Room photo" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/sala/20201125_151608.jpg" alt="Image 2" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/sala/20201217_095105.jpg" alt="Image 3" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/banheiro/20201125_105927.jpg" alt="Image 4" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/banheiro/20201125_151240.jpg" alt="Image 5" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/banheiro/20201217_151100.jpg" alt="Image 6" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/cozinha/20200211_175828.jpg" alt="Image 7" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/cozinha/20200701_143833.jpg" alt="Image 8" />
                </div>
            </div>

        </section>
    );
}