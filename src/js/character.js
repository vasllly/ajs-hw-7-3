/**
 * Создает объект класса Character
 * @class Character
 *
 * @param {string} name имя персонажа
 * @param {string} type тип персонажа
 *
 * @property {string} Character.name имя персонажа
 * @property {string} Character.type тип персонажа
 * @property {number} Character.health здоровье персонажа
 * @property {number} Character.attack атака персонажа
 * @property {number} Character.defence защита персонажа
 */
export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

/**
 * Нанесение урона объекту класса Character
 * @method Character.damage
 *
 * @param {number} points количество наносимого урона
 */
Character.prototype = {
  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  },
};
