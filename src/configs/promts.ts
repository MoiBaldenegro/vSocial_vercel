export const promtsOptions = [
  {
    name: "Halloween",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a halloween en alta resolución estilo realista",
    },
    type: "section-01",
  },
  {
    name: "Navidad",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a navidad en alta resolución estilo realista",
    },
    type: "section-01",
  },

  {
    name: "Futuro",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a la epoca del futuro estilo ciberpunk en alta resolución estilo realista",
    },
    type: "section-01",
  },
  {
    name: "Espacio",
    value: {
      replaceBackground:
        "La superficie de la luna donde detras se ven todo el sistema solar y naves espaciales",
    },
    type: "section-01",
  },
  {
    name: "Blue background",
    value: {
      background: "blue"
    },
    type: "section-01",
  },
  {
    name: "only up kuality ",
    value: {
      enhance: true,
    },
    type: "section-01",
  },
  {
    name: "Recolor",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a halloween en alta resolución estilo realista",
      recolor: {
        prompt: ['hair', 'clothes'], // Especifica que quieres recolorear el cabello y la ropa
        to: 'purple',                // Cambia ambos a morado
        multiple: true               // Aplica el cambio a todos los elementos que coincidan
      }
    },
    type: "section-01",
  },
  {
    name: "Remove face",
    value: {
      remove: ['face'] // Quita el cabello
    },
    type: "section-01",
  },
  {
    name: "replace eyes",
    value: {
      replace: {
        from: 'head',
        to: 'calabaza de halloween',
        preserveGeometry: true
      }
    },
    type: "section-01",
  }, {
    name: "Random halloween art",
    value: {
      namedTransformations: ["halloween-ramdom-art"]
    },
    type: "section-01",

  },
  {
    name: "Halloween",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a halloween en alta resolución estilo realista",
    },
    type: "section-02",
  },
  {
    name: "Navidad",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a navidad en alta resolución estilo realista",
    },
    type: "section-02",
  },

  {
    name: "Futuro",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a la epoca del futuro estilo ciberpunk en alta resolución estilo realista",
    },
    type: "section-02",
  },
  {
    name: "Espacio",
    value: {
      replaceBackground:
        "La superficie de la luna donde detras se ven todo el sistema solar y naves espaciales",
    },
    type: "section-02",
  },
  {
    name: "Blue background",
    value: {
      background: "blue"
    },
    type: "section-02",
  },
  {
    name: "only up kuality ",
    value: {
      enhance: true,
    },
    type: "section-02",
  },
  {
    name: "Recolor",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a halloween en alta resolución estilo realista",
      recolor: {
        prompt: ['hair', 'clothes'], // Especifica que quieres recolorear el cabello y la ropa
        to: 'purple',                // Cambia ambos a morado
        multiple: true               // Aplica el cambio a todos los elementos que coincidan
      }
    },
    type: "section-02",
  },
  {
    name: "Remove face",
    value: {
      remove: ['face'] // Quita el cabello
    },
    type: "section-02",
  },
  {
    name: "replace eyes",
    value: {
      replace: {
        from: 'head',
        to: 'calabaza de halloween',
        preserveGeometry: true
      }
    },
    type: "section-02",
  }, {
    name: "Random halloween art",
    value: {
      namedTransformations: ["halloween-ramdom-art"]
    },
    type: "section-02",

  }
];

export const styleSectionsPromts = [
  {
    name: "section-01",
  }
  ,
  {
    name: "section-02",
  }
]