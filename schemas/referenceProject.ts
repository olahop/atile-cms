export default {
  name: 'referenceProject',
  type: 'document',
  title: 'Referanseprosjekt',
  fields: [
    {
      title: 'Prosjekttittel',
      name: 'title',
      type: 'string',
      required: true,
    },
    {
      title: 'Kunde',
      name: 'customer',
      type: 'string',
      required: true,
    },
    {
      title: 'Prosjektstart',
      name: 'startDate',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
      required: true,
    },
    {
      title: 'Prosjektslutt',
      name: 'endDate',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Beskrivelse',
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      title: 'Teknologier',
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
      required: true,
    },
    {
      title: 'Bilder',
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      required: true,
    },
  ],
};
