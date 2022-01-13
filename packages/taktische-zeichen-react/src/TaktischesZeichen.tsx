import { erzeugeTaktischesZeichen, type TaktischesZeichen } from "taktische-zeichen";

export type Props = TaktischesZeichen & {
  alt?: string;
  className?: string;
};

export default function TaktischesZeichen({
  grundzeichen,
  fachaufgabe,
  organisation,
  einheit,
  funktion,
  ...props
}: Props) {
  const icon = erzeugeTaktischesZeichen({
    grundzeichen,
    fachaufgabe,
    organisation,
    einheit,
    funktion,
  });

  return (
    <img
      src={icon.dataUrl}
      {...props}
    />
  );
}
