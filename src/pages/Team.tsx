import Image from "next/image"

const people = [
    {
      name: 'pessoa1',
      role: 'Co-Founder / CEO',
      imageUrl:
        '/assets/About/imagem1.jpg',
    },
    {
        name: 'pessoa2',
        role: 'Co-Founder',
        imageUrl:
          '/assets/About/imagem1.jpg',
      },
      {
        name: 'pessoa3',
        role: 'Auxiliar',
        imageUrl:
          '/assets/About/imagem1.jpg',
      },
      {
        name: 'pessoa4',
        role: 'Motorista',
        imageUrl:
          '/assets/About/imagem1.jpg',
      },

  ]
  
  export default function Team() {
    return (
      <section className="bg-[#DEE8FE] py-24 sm:py-32 min-h-[80vh] flex justify-center items-center">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold tracking-tight text-gray-700 sm:text-5xl">Conheça nosso time</h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              O time pode ser alterado a qualquer momento para realizar o serviço em sua residência.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image width={800} height={400} alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-700">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-quinta">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  