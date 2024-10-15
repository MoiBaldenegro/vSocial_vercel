export const promtsOptions = [
  {
    name: "Halloween",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a halloween en alta resolución estilo realista",
    },
  },
  {
    name: "Navidad",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a navidad en alta resolución estilo realista",
    },
  },
  {
    name: "Epoca Medieval",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a la epoca medieval en alta resolución estilo realista",
    },
  },
  {
    name: "Futuro",
    value: {
      replaceBackground:
        "un fondo terrorífico con alusión a la epoca del futuro estilo ciberpunk en alta resolución estilo realista",
    },
  },
  {
    name: "Espacio",
    value: {
      replaceBackground:
        "La superficie de la luna donde detras se ven todo el sistema solar y naves espaciales",
    },
  },
  {
    name: "Blue background",
    value: {
      background: "blue"
    }
  },
  {
    name: "only up kuality ",
    value: {
      enhance: true,
    }
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
    }
  },
  {
    name: "Remove face",
    value: {
      remove: ['face'] // Quita el cabello
    }
  },
  {
    name: "replace eyes",
    value: {
      replace: {
        from: 'head',
        to: 'calabaza de halloween',
        preserveGeometry: true
      }
    }
  }, {
    name: "Random halloween art",
    value: {
      namedTransformations: ["halloween-ramdom-art"]
    }

  }
];