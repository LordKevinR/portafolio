import { cn } from "../../lib/utils";

export function Card({ image1, image2, title, desc, width, height }) {
  return (
    <div className={`w-full ${width}`}>
      <div
        className={cn(
          `${height} group w-full cursor-pointer overflow-hidden relative card rounded-[2rem] shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800`,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundImage = `url(${image2})`)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundImage = `url(${image1})`)
        }
      >
        {/* Contenedor del texto, que subirá en el hover */}
        <div
          className={cn(
            "text flex flex-col items-start relative z-50 bg-gradient-to-t from-black/90 to-transparent p-4",
            "transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 -m-5 w-[120%]"
          )}
        >
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          {/* Descripción inicialmente oculta, pero se muestra en el hover */}
          <p className="font-normal text-base w-[95%] text-gray-50 relative mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
