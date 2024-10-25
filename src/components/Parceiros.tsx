
import Image from "next/image";

export default function Parceiros(){
    return (
        <section id="carrosel">

            <div className="relative w-full flex gap-4 py-6 overflow-x-hidden">
                <div className="flex gap-4 animate-marquee">
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center" src="/assets/Carrosel/imagem.png" alt="Room photo" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center " src="/assets/Carrosel/imagem2.png" alt="Image 2" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center " src="/assets/Carrosel/imagem3.png" alt="Image 3" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center" src="/assets/Carrosel/imagem4.png" alt="Image 4" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center " src="/assets/Carrosel/imagem5.png" alt="Image 5" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center" src="/assets/Carrosel/10.png" alt="Image 6" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center" src="/assets/Carrosel/imagem8.png" alt="Image 6" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center" src="/assets/Carrosel/imagem6.png" alt="Image 6" />
                 
                </div>
            </div>

        </section>
    );
}