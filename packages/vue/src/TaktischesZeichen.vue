<script setup lang="ts">
import { computed, h } from 'vue';
import {
  Container,
  Element,
  erzeugeTaktischesZeichen,
  TextNode,
  type TaktischesZeichen,
} from 'taktische-zeichen-core';

export interface Props extends TaktischesZeichen {}

const props = withDefaults(defineProps<Props>(), {});

const image = computed(() =>
  erzeugeTaktischesZeichen({
    grundzeichen: props.grundzeichen,
    fachaufgabe: props.fachaufgabe,
    organisation: props.organisation,
    einheit: props.einheit,
    verwaltungsstufe: props.verwaltungsstufe,
    funktion: props.funktion,
    symbol: props.symbol,
    text: props.text,
    name: props.name,
    typ: props.typ,
    organisationName: props.organisationName,
    farbe: props.farbe,
    skipFontRegistration: props.skipFontRegistration,
  })
);

function renderElement(element: Element, additionalAttrs?: Record<string, any>): any {
  const children =
    element instanceof Container
      ? element.children.map((child) => renderElement(child))
      : element instanceof TextNode
      ? element.text
      : null;

  return h(
    element.name,
    {
      ...element.attributes,
      style: element.styles,
      ...additionalAttrs,
    },
    children
  );
}
</script>

<template>
  <component :is="() => renderElement(image.svg, $attrs)" />
</template>
