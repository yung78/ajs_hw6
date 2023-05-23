export default function getSpecialAttack(special) {
  const specAttack = [];

  special.forEach((el) => {
    if ('description' in el) {
      specAttack.push({
        id: el.id,
        name: el.name,
        description: el.description,
        icon: el.icon,
      });
    } else {
      specAttack.push({
        id: el.id,
        name: el.name,
        description: 'Описание недоступно',
        icon: el.icon,
      });
    }
  });
  return specAttack;
}
