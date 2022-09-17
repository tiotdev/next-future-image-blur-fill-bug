import Image from "next/image";
import FutureImage from "next/future/image";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "red",
          position: "relative",
        }}
      >
        <Image
          src="https://img.travelfeed.io/jpphotography%2F20200609T140211386Z-reisen-127.jpg"
          alt=""
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMINGf4/+3at/t7+2viGNQZGKbE69UlOSV5mgEAnuYKmizl818AAAAASUVORK5CYII="
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "red",
          position: "relative",
        }}
      >
        <FutureImage
          src="https://img.travelfeed.io/jpphotography%2F20200609T140211386Z-reisen-127.jpg"
          alt=""
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMINGf4/+3at/t7+2viGNQZGKbE69UlOSV5mgEAnuYKmizl818AAAAASUVORK5CYII="
          placeholder="blur"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
