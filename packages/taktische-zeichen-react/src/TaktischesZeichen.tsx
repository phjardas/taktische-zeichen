import {
  erzeugeTaktischesZeichen,
  type TaktischesZeichen,
} from "taktische-zeichen";

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
  symbol,
  ...props
}: Props) {
  const icon = erzeugeTaktischesZeichen({
    grundzeichen,
    fachaufgabe,
    organisation,
    einheit,
    funktion,
    symbol,
  });

  return <img src={icon.dataUrl} {...props} />;
}
