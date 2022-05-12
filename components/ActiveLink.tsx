import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// CONSTANTES
const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};
// INTERFACE
interface Props {
  text: string;
  href: string;
}
// INICIO
export const ActiveLink: FC<Props> = ({ text, href }) => {
  //HOOKS
  const { asPath } = useRouter();
  // RENDER
  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
