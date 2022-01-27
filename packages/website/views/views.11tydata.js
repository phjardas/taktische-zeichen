const { fachaufgaben } = require('taktische-zeichen-core');

exports.fachaufgaben = fachaufgaben.map(f => ({ id: f.id, label: f.label })).sort((a, b) => a.label.localeCompare(b.label));
