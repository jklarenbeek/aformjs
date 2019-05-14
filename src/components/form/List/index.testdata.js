/* eslint-disable object-curly-newline */
/* eslint-disable quote-props */
/* eslint-disable import/prefer-default-export */
const arraySizes = ['Small', 'Default', 'Medium', 'Large'];
const arrayColors = [
  { key: 'default', label: 'Default', color: 'default', group: 'Major' },
  { key: 'primary', label: 'Primary', color: 'primary', group: 'Major' },
  { key: 'secondary', label: 'Secondary', color: 'secondary', group: 'Major' },
  { key: 'link', label: 'Link', color: 'link', group: 'Minor' },
  { key: 'info', label: 'Info', color: 'info', group: 'Minor' },
  { key: 'success', label: 'Success', color: 'success', group: 'Minor' },
  { key: 'warning', label: 'Warning', color: 'warning', group: 'Minor' },
  { key: 'danger', label: 'Danger', color: 'danger', group: 'Minor' },
];
const arrayUnits = [
  { key: 'mm', label: 'Millimeter [mm]', group: 'length' },
  { key: 'cm', label: 'Centimeter [cm]', group: 'length' },
  { key: 'm', label: 'Meters [m]', group: 'length' },
  { key: 'km', label: 'Kilometers [km]', group: 'length' },
  { key: 'mg', label: 'MilliGram [mm]', group: 'mass' },
  { key: 'g', label: 'Gram [m]', group: 'mass' },
  { key: 'kg', label: 'Kilogram [km]', group: 'mass' },
  { key: 'mW', label: 'Milliwatts [mW]', group: 'power' },
  { key: 'W', label: 'Watt [W]', group: 'power' },
  { key: 'kW', label: 'Kilowatts [kW] (S)', group: 'power' },
  { key: 'MW', label: 'Megawatts [MW]', group: 'power' },
];
const arrayUnitsGroups = {
  length: 'Convert Length',
  mass: 'Convert Mass',
  power: 'Convert Power',
};
const arrayUnitsSelected = 'kW';

const objectKingdom1 = {
  animalia: 'Animalia',
  fungi: 'Fungi',
  plantae: 'Plantae',
  chromista: 'Chromista',
  protozoa: 'Protozoa',
  archaea: 'Archaea',
  bacteria: 'Bacteria',
};
const objectKingdom2 = {
  animalia: { label: 'Animalia', description: 'Animals are multicellular eukaryotic organisms that form the biological kingdom Animalia.' },
  fungi: { label: 'Fungi', description: 'A fungus (plural: fungi[3] or funguses[4]) is any member of the group of eukaryotic organisms that includes microorganisms such as yeasts and molds, as well as the more familiar mushrooms.' },
  plantae: { label: 'Plantae', description: 'Plants are mainly multicellular, predominantly photosynthetic eukaryotes of the kingdom Plantae.' },
  chromista: { label: 'Chromista', descrition: 'The Chromista is a eukaryotic kingdom, probably polyphyletic.' },
  protozoa: { label: 'Protozoa', description: 'Protozoa (also protozoan, plural protozoans) is an informal term for single-celled eukaryotes, either free-living or parasitic, which feed on organic matter such as other microorganisms or organic tissues and debris.' },
  archaea: { label: 'Archaea', description: 'Archaea (/ɑːrˈkiːə/ (About this soundlisten) or /ɑːrˈkeɪə/ ar-KEE-ə or ar-KAY-ə) constitute a domain of single-celled microorganisms.' },
  bacteria: { label: 'Bacteria', description: 'Bacteria (/bækˈtɪəriə/ (About this soundlisten); common noun bacteria, singular bacterium) are a type of biological cell.' },
};

const arrayFungi1 = ['Microsporidia', 'Chytridiomycota', 'Blastocladiomycota', 'Neocallimastigomycota', 'Glomeromycota', 'Ascomycota', 'Basidiomycota'];
const arrayFungi2 = [
  { key: 'microsporidia', label: 'Microsporidia' },
  { key: 'chytridiomycota', label: 'Chytridiomycota', description: 'flagellate cell' },
  { key: 'blastocladiomycota', label: 'Blastocladiomycota', description: 'flagellate cell' },
  { key: 'zygomycota', label: 'Zygomycota (Disabled)', description: 'zygospore with suspensors', disabled: true },
  { key: 'neocallimastigomycota', label: 'Neocallimastigomycota' },
  { key: 'glomeromycota', label: 'Glomeromycota (ReadOnly)', description: 'endomycorrhizal fungi', readonly: true },
  { key: 'ascomycota', label: 'Ascomycota', description: 'ascus with ascopsores' },
  { key: 'basidiomycota', label: 'Basidiomycota', description: 'basidium with basidiospores' },
];

const objectPlant1 = {
  algea: 'OP1: Green algae',
  bryophytes: 'OP1: Bryophytes (S)',
  pteridophytes: 'OP1: Pteridophytes',
  seeds: 'OP1: Seed plants (M)',
};
const objectPlant1Selected = 'bryophytes';
const objectPlant1Multiple = ['bryophytes', 'seeds'];

const objectPlant2 = {
  algea: { label: 'OP2: Green algae (M)', avgSpecies: 8500, minSpecies: 6600, maxSpecies: 10300 },
  bryophytes: { label: 'OP2: Bryophytes', avgSpecies: 19000, minSpecies: 18100, maxSpecies: 20200, disabled: true },
  pteridophytes: { label: 'OP2: Pteridophytes (S)', avgSpecies: 12000, minSpecies: 11800, maxSpecies: 12200 },
  seeds: { label: 'OP2: Seed plants', avgSpecies: 260000, minSpecies: 259511, maxSpecies: 26144 },
};
const objectPlant2Selected = 'pteridophytes';
const objectPlant2Multiple = ['pteridophytes', 'algea'];

const objectPlant3 = {
  chlorophyta: { label: 'Green algae (chlorophytes)', group: 'algea' },
  charophyta: { label: 'Green algae (e.g. desmids & stoneworts)', group: 'algea' },
  marchantiophyta: { label: 'Liverworts', group: 'bryophytes' },
  anthocerotophyta: { label: 'Hornworts', group: 'bryophytes' },
  bryophyta: { label: 'Mosses', group: 'bryophytes' },
  lycopodiophyta: { label: 'Club mosses (S)', group: 'pteridophytes' },
  pteridophyta: { label: 'ferns, whisk ferns & horsetails', group: 'pteridophytes' },
  cycadophyta: { label: 'Cycads (M)', group: 'seeds' },
  ginkgophyta: { label: 'Ginkgo', group: 'seeds' },
  pinophyta: { label: 'Conifers', group: 'seeds' },
  gnetophyta: { label: 'Gnetophytes (M)', group: 'seeds' },
  magnoliophyta: { label: 'Flowering Plants', group: 'seeds' },
};
const objectPlant3Groups = {
  algea: 'OP3: Green algae',
  bryophytes: 'OP3: Bryophytes',
  pteridophytes: 'OP3: Pteridophytes',
  seeds: 'OP3: Seed plants',
};
const objectPlant3Selected = 'lycopodiophyta';
const objectPlant3Multiple = ['lycopodiophyta', 'cycadophyta', 'gnetophyta'];

const objectPlantGroups1 = {
  'OG1. Green algae': ['Chlorophyta', 'Charophyta'],
  'OG1. Bryophytes': ['Marchantiophyta', 'Anthocerotophyta (M)', 'Bryophyta'],
  'OG1. Pteridophytes': ['Lycopodiophyta', 'Pteridophyta'],
  'OG1. Seed plants': ['Cycadophyta', 'Ginkgophyta (S)', 'Pinophyta', 'Gnetophyta', 'Magnoliophyta'],
};
const objectPlantGroups1Selected = 'Ginkgophyta (S)';
const objectPlantGroups1Multiple = ['Ginkgophyta (S)', 'Anthocerotophyta (M)'];

const objectPlantGroups2 = {
  'OG2. Green algae': [{ key: 'chlorophyta', label: 'Green algae (chlorophytes)' }, { key: 'charophyta', label: 'Green algae (e.g. desmids & stoneworts) (M)' }],
  'OG2. Bryophytes': [{ key: 'marchantiophyta', label: 'Liverworts (M)' }, { key: 'anthocerotophyta', label: 'Hornworts (S)' }, { key: 'bryophyta', label: 'Mosses' }],
  'OG2. Pteridophytes': [{ key: 'lycopodiophyta', label: 'Club mosses' }, { key: 'pteridophyta', label: 'ferns, whisk ferns & horsetails' }],
  'OG2. Seed plants': [{ key: 'cycadophyta', label: 'Cycads' }, { key: 'ginkgophyta', label: 'Ginkgo' }, { key: 'pinophyta', label: 'Conifers' }, { key: 'gnetophyta', label: 'Gnetophytes' }, { key: 'magnoliophyta', label: 'Flowering Plants' }],
};
const objectPlantGroups2Selected = 'anthocerotophyta';
const objectPlantGroups2Multiple = ['anthocerotophyta', 'marchantiophyta', 'charophyta'];

const objectPlantGroups3 = {
  'OG3. Green algae': [['chlorophyta', 'Green algae (chlorophytes)'], ['charophyta', 'Green algae (e.g. desmids & stoneworts)']],
  'OG3. Bryophytes': [['marchantiophyta', 'Liverworts'], ['anthocerotophyta', 'Hornworts'], ['bryophyta', 'Mosses']],
  'OG3. Pteridophytes': [['lycopodiophyta', 'Club mosses'], ['pteridophyta', 'ferns, whisk ferns & horsetails (M)']],
  'OG3. Seed plants': [['cycadophyta', 'Cycads'], ['ginkgophyta', 'Ginkgo'], ['pinophyta', 'Conifers (S)'], ['gnetophyta', 'Gnetophytes'], ['magnoliophyta', 'Flowering Plants (M)']],
};
const objectPlantGroups3Selected = 'pinophyta';
const objectPlantGroups3Multiple = ['pinophyta', 'pteridophyta', 'magnoliophyta'];

const tuplePlant1 = [
  ['algea', 'TP1: Green algae'],
  ['bryophytes', 'TP1: Bryophytes'],
  ['pteridophytes', 'TP1: Pteridophytes'],
  ['seeds', 'TP1: Seed plants (S)'],
];
const tuplePlant1Selected = 'seeds';

const tuplePlant2 = [
  ['algea', { label: 'TP2: Green algae', avgSpecies: 8500, minSpecies: 6600, maxSpecies: 10300 }],
  ['bryophytes', { label: 'TP2: Bryophytes', avgSpecies: 19000, minSpecies: 18100, maxSpecies: 20200, disabled: true }],
  ['pteridophytes', { label: 'TP2: Pteridophytes (S)', avgSpecies: 12000, minSpecies: 11800, maxSpecies: 12200 }],
  ['seeds', { label: 'TP2: Seed plants', avgSpecies: 260000, minSpecies: 259511, maxSpecies: 26144 }],
];
const tuplePlant2Selected = 'pteridophytes';

const tuplePlantGroups1 = [
  ['TG1: Green algae', ['Chlorophyta', 'Charophyta (S)']],
  ['TG1: Bryophytes', ['Marchantiophyta', 'Anthocerotophyta', 'Bryophyta']],
  ['TG1: Pteridophytes', ['Lycopodiophyta', 'Pteridophyta']],
  ['TG1: Seed plants', ['Cycadophyta', 'Ginkgophyta', 'Pinophyta', 'Gnetophyta', 'Magnoliophyta']],
];
const tuplePlantGroups1Selected = 'Charophyta (S)';

const tuplePlantGroups2 = [
  ['TG2: Green algae', [{ key: 'chlorophyta', label: 'Green algae (chlorophytes)' }, { key: 'charophyta', label: 'Green algae (e.g. desmids & stoneworts)' }]],
  ['TG2: Bryophytes', [{ key: 'marchantiophyta', label: 'Liverworts' }, { key: 'anthocerotophyta', label: 'Hornworts' }, { key: 'bryophyta', label: 'Mosses' }]],
  ['TG2: Pteridophytes', [{ key: 'lycopodiophyta', label: 'Club mosses' }, { key: 'pteridophyta', label: 'ferns, whisk ferns & horsetails' }]],
  ['TG2: Seed plants', [{ key: 'cycadophyta', label: 'Cycads' }, { key: 'ginkgophyta', label: 'Ginkgo' }, { key: 'pinophyta', label: 'Conifers' }, { key: 'gnetophyta', label: 'Gnetophytes' }, { key: 'magnoliophyta', label: 'Flowering Plants (S)' }]],
];
const tuplePlantGroups2Selected = 'magnoliophyta';

const tuplePlantGroups3 = [
  ['TG3: Green algae', [['chlorophyta', 'Green algae (chlorophytes)'], ['charophyta', 'Green algae (e.g. desmids & stoneworts)']]],
  ['TG3: Bryophytes', [['marchantiophyta', 'Liverworts (S)'], ['anthocerotophyta', 'Hornworts'], ['bryophyta', 'Mosses']]],
  ['TG3: Pteridophytes', [['lycopodiophyta', 'Club mosses'], ['pteridophyta', 'ferns, whisk ferns & horsetails']]],
  ['TG3: Seed plants', [['cycadophyta', 'Cycads'], ['ginkgophyta', 'Ginkgo'], ['pinophyta', 'Conifers'], ['gnetophyta', 'Gnetophytes'], ['magnoliophyta', 'Flowering Plants']]],
];
const tuplePlantGroups3Selected = 'marchantiophyta';

export const testData = {
  arraySizes,
  arrayColors,
  arrayUnits,
  arrayUnitsGroups,
  arrayUnitsSelected,
  objectKingdom1,
  objectKingdom2,
  arrayFungi1,
  arrayFungi2,
  objectPlant1,
  objectPlant1Selected,
  objectPlant1Multiple,
  objectPlant2,
  objectPlant2Selected,
  objectPlant2Multiple,
  objectPlant3,
  objectPlant3Groups,
  objectPlant3Selected,
  objectPlant3Multiple,
  objectPlantGroups1,
  objectPlantGroups1Selected,
  objectPlantGroups1Multiple,
  objectPlantGroups2,
  objectPlantGroups2Selected,
  objectPlantGroups2Multiple,
  objectPlantGroups3,
  objectPlantGroups3Selected,
  objectPlantGroups3Multiple,
  tuplePlant1,
  tuplePlant1Selected,
  tuplePlant2,
  tuplePlant2Selected,
  tuplePlantGroups1,
  tuplePlantGroups1Selected,
  tuplePlantGroups2,
  tuplePlantGroups2Selected,
  tuplePlantGroups3,
  tuplePlantGroups3Selected,
};
