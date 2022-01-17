import {
  erzeugeTaktischesZeichen,
  type TaktischesZeichen,
} from "taktische-zeichen-core";

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
  text,
  ...props
}: Props) {
  const icon = erzeugeTaktischesZeichen({
    grundzeichen,
    fachaufgabe,
    organisation,
    einheit,
    funktion,
    symbol,
    text,
  });

  return <img src={icon.dataUrl} {...props} />;
}
