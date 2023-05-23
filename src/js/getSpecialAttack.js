export default function getSpecialAttack({ special }) {
  const specAttack = [];

  special.forEach((el) => {
    const {
      id,
      name,
      description = 'Описание недоступно',
      icon,
    } = el;
    specAttack.push({
      id,
      name,
      description,
      icon,
    });
  });
  return specAttack;
}
