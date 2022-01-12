import { createIcon, type IconDescriptor } from "taktische-zeichen";

export type Props = IconDescriptor & {
  alt?: string;
  className?: string;
};

export default function TaktischesZeichen({
  grundzeichen,
  fachaufgabe,
  organisation,
  einheit,
  ...props
}: Props) {
  const icon = createIcon({ grundzeichen, fachaufgabe, organisation, einheit });

  return (
    <img
      src={`data:image/svg+xml,${encodeURIComponent(icon.svg)}`}
      {...props}
    />
  );
}
