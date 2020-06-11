// ======================================
// List / Set - простые списки - аналог массива, у Set все значения уникальные
// ======================================

class List {

  constructor() {
    this.memory = [];
    this.length = 0;
  }

  /**
   * Первое - способ получения данных
   * Сложность операции доступа к данным - константа. O(1) - "AWESOME!!"
   */

  get(address) {
    return this.memory[address];
  }

  /**
   * Так как списки имеют упорядоченную структуру хранения мы можем добавлять данные в начало, в середину или конец списка.
   * Здесь имплементированы только операции добавления и удаления данных из начала и конца списка, то есть такие методы:
   *   - Push    - Добавить значение в конец
   *   - Pop     - Удалить значение с конца
   *   - Unshift - Добавить значение в начало
   *   - Shift   - Удалить значение из начала (первое)
   */

  /*
   * Это метод добавления данных в конец. Тут все просто, потому что индекс элемента который сейчас будет добавлен - это текущая длина списка (this.length)
   * Сложность добавления данных в конец - константа O(1) - "AWESOME!!"
   */

  push(value) {
    this.memory[this.length] = value;
    this.length++;
  }

  /**
   * Удаление данных с конца.
   * Индекс последнего элемента - this.length - 1, его нужно вернуть и удалить из памяти.
   * Сложность операции pop -  O(1) - "AWESOME!!"
   */

  pop() {
    // Ничего не делать, если элементов в списке нет
    if (this.length === 0) return;

    // Получить последнее значение, перестать его хранить и вернуть его
    let lastAddress = this.length - 1;
    let value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    // Также вернуть удаляемое значение чтобы его можно было использовать
    return value;
  }

  /**
   * Так как нужно добавть новый элемент в начало нашего списка, нам необходимо сначала освободить для него место в начале (в нулевом индексе), смещая все элементы на один вправо.
   * Тут на схеме вставляется значение Х
   * 
   *     [a, b, c, d, e]   (до)
   *      0  1  2  3  4
   *       ⬊  ⬊  ⬊  ⬊  ⬊
   *         1  2  3  4  5
   *     [x, a, b, c, d, e]   (после)
   *
   * Поэтому придется проходиться по всем элементам чтобы передвигать их значения на индекс вперед. Сложность тут становится ЛИНЕЙНОЙ - O(N) - "OKAY."
   */

  unshift(value) {
    // Сохраняем значение которое планируем добавить
    let previous = value;

    // Пробегаемся по всем значениям...
    for (let address = 0; address < this.length; address++) {
      // заменяем "current" (текущее) значение предыдущим ("previous") и сохраняем текущее для следующей итерации
      let current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    // Добавляем бывший последний элемент в новую позицию в конце списка (размер массива стал на единицу больше и это действие не умещается в цикл)
    this.memory[this.length] = previous;
    this.length++;
  }

  /**
   * shift - удаление элемента из начала списка и смещение всех оставшихся на одну позицию влево
   *
   *     [x, a, b, c, d, e] (до)
   *         1  2  3  4  5
   *       ⬋  ⬋  ⬋  ⬋  ⬋
   *      0  1  2  3  4
   *     [a, b, c, d, e]  (после)
   *
   * Сложность операции ЛИНЕЙНАЯ: O(N) - "OKAY."
   */

  shift() {
    // Ничего не делать, если элементов в списке нет
    if (this.length === 0) return;

    let value = this.memory[0];

    // Пробегаемся по всем значениям...
    for (let address = 0; address < this.length - 1; address++) {
      // и заменяем каждый элемент ледующим элементом списка
      this.memory[address] = this.memory[address + 1];
    }

    // Удаляем последний элемент (после цикла последний и предпоследний элементы одинаковые и длина списка должна уменьшиться на единицу)
    delete this.memory[this.length - 1];
    this.length--;

    return value;
  }
}

// ===============================================================
// Хэш таблица 
// ===============================================================
/**
 * Хэш-таблица это структура данных которая "неупорядочена". Вместо индексов в списке у нас есть "ключи" и "значения" и адреса памяти где хранятся значения вычисляются по ключам.
*/

class HashTable {

  // В качестве "памяти" снова выступает обычный JS-массив
  constructor() {
    this.memory = [];
  }

  /**
   * Для того чтобы хранить пары ключ-значение в памяти нам нужен способ взять ключ и превратить его в адрес памяти. Мы делаем это с помощью операции, называемой хэширование
   * Проще говоря, берется ключ и некоим образом преобразуется в уникальное число.
   *
   *    hashKey("abc") =>  96354
   *    hashKey("xyz") => 119193
   *
   * Тут нужно быть осторожным, потому что для очень такого большого числа - может не существовать реального адреса в памяти. То есть хэширование может привести к несуществующему адресу.
   * Поэтому алгоритм хэширования должен выдавать адреса ограниченного размера, что означает, что количество адресов ограничено для неограниченнного количества ключей.
   * В итоге можно прийти к коллизиям. Коллиизия - это явление при котором два ключа превращаются в один и тот же адрес в результате хэширования. ( а должны в разные)
   * Любая "настоящая" / "боевая" хэш-таблица должна уметь работать с такими ситуациями, однако в нашем примере мы просто закроем глаза на эту проблему ( в учебных проектах простейшего алгоритма хэширования достаточно)
   */

  /**
   * Хэш-функция для вычисления адреса по ключу. Не надо париться, если не понятно как она работает,
   * достаточно просто знать что она принимает строку на вход и возвращает уникальный (чаще всего) адрес который мы заюзаем в остальных методах
   */

  hashKey(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      // Хоба - магия
      let code = key.charCodeAt(index);
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }

  // Функция получения значения - по ключу. Сложность постоянная -  O(1) - "AWESOME!!"
  get(key) {
    // Превращаем ключ в адрес
    let address = this.hashKey(key);
    // Потом возвращаем то что там лежит по этому адресу
    return this.memory[address];
  }

  // Функция добавления значения. Сложность также константа - O(1) - "AWESOME!!"
  set(key, value) {
    // Снова превращаем ключ в адрес
    let address = this.hashKey(key);
    // Дальше просто устанавливаем значение по этому адресу
    this.memory[address] = value;
  }

  // Метод для удаления данных - сложность снова константа - O(1) - "AWESOME!!"
  remove(key) {
    // Как всегда превращаем ключ в адрес
    let address = this.hashKey(key);
    // Затем, если значение по этому адресу существует, удаляем его
    if (this.memory[address]) {
      delete this.memory[address];
    }
  }
}


// =========================================================
// Стэк
// =========================================================
// Стэк похож на список тем, что у него есть порядок. Но он ограничен только двумя функциями работы с данными: push и pop. Эти функции супер быстро работают с памятью
class Stack {

  // В качестве памяти выступает массив
  constructor() {
    this.list = [];
    this.length = 0;
  }

  // Пуш добавляет данные в конец
  push(value) {
    this.length++;
    this.list.push(value);
  }

  // Поп удаляет последний добавленный элемент из стека
  pop() {
    // Ничего не делать если у нас нет элементов
    if (this.length === 0) return;

    // Вернуть последний элемент из стека и удалить его из памяти
    this.length--;
    return this.list.pop();
  }

  // Посмотреть на последнее значение в стеке
  peek() {
    return this.list[this.length - 1];
  }
}

// =========================================================
// Очередь
// =========================================================
// Очередь очень похожа на стек, разница только в том, что элементы в очереди удаляются не с конца, а сначала. Удаление самого старого элемента, а не самого недавнего
class Queue {

  constructor() {
    this.list = [];
    this.length = 0;
  }

  // Это метод добавления элементов в очередь. Точно также добавление происходит в конец, как в стеке
  enqueue(value) {
    this.length++;
    this.list.push(value);
  }

  // Удаление элемента с нулевой позиции
  dequeue() {
    // Ничего не делать, если очередь пустая
    if (this.length === 0) return;

    // Shift the first item off the start of the list and return the value.
    this.length--;
    return this.list.shift();
  }

  peek() {
    return this.list[0];
  }
}

// ===============================================================
// Граф
// ===============================================================
/**
 * Схематичное представление:
 *
 *     A –→ B ←–––– C → D ↔ E
 *     ↑    ↕     ↙ ↑     ↘
 *     F –→ G → H ← I ––––→ J
 *          ↓     ↘ ↑
 *          K       L
 *
 * У нас есть несколько "узлов" (A, B, C, D, ...) которые соеденены линиями.
 * Узлы будут выглядеть примерно вот так:
 *
 *     Node {
 *       value: ...,
 *       lines: [(Node), (Node), ...]
 *     }
 *
 * А весь граф примерно так:
 *
 *     Graph {
 *       nodes: [
 *         Node {...},
 *         Node {...},
 *         ...
 *       ]
 *     }
 */

class Graph {

  // Будем хранить все узлы в обычном js-массиву. Не потому что они нужны нам в каком-то порядке, а потому, что нужно хранить ссылки на всех
  constructor() {
    this.nodes = [];
  }

  // Добавлять значения в граф можно создавая узлы пока без всяких линий
  addNode(value) {
    return this.nodes.push({
      value,
      lines: []
    });
  }

  /**
   * Далее нужен метод поиска узла в графе. Чаще всего у вас будет какая-то другая структура данных чтобы осуществлять поиск более эффективно.
   * В нашем случае поиск будет простой, в лоб, с пробежкой через все узлы. Эт помедленнее, но сейчас достаточно
   */

  find(value) {
    return this.nodes.find(node => {
      return node.value === value;
    });
  }

  // Теперь можно соединять два узла созданием "связи" от одного к другому
  addLine(startValue, endValue) {
    // Найти оба узла с данными значениями
    let startNode = this.find(startValue);
    let endNode = this.find(endValue);

    // Психануть если один из них не нашелся
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    // Добавить ссылку из startNode в endNode
    startNode.lines.push(endNode);
  }
}

/**
 * И граф можно использовать примерно так:
 *
 *     var graph = new Graph();
 *     graph.addNode(1);
 *     graph.addNode(2);
 *     graph.addLine(1, 2);
 *     var two = graph.find(1).lines[0];
 */

// =========================================================
// Односвязный список
// =========================================================

/**
 * Теперь посмотрим как графоподобные структуры могут помочь оптимизировать упорядоченные списки данных.
 * Связный список это очень частоиспользуемая структура для создания других структур данных благодаря своей способности эффективно вставлять новые данные в конец, в начало и в середину списка.
 * Базовая идея такая же как у графа - есть узлы, которые указывают на другие узлы:
 *
 *     1 -> 2 -> 3 -> 4 -> 5
 *
 * Визуально в JSON-формате это выглядит как-то так:
 *     {
 *       value: 1,
 *       next: {
 *         value: 2,
 *         next: {
 *           value: 3,
 *           next: {...}
 *         }
 *       }
 *     }
 */

class LinkedList {

  // Связный список имеет один узел ( не как в графе) с которого начинается вся цепочка. Это "начало" ("голова") списка.
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Получение данных по индексу. Тут все не так как в обычных списках, нельзя просто так взять и прыгнуть по нужному индексу. Вместо этого нужно двигаться по узлам списка.
  get(position) {
    // Выкинуть ошибку если позиция больше чем длина связного списка
    if (position >= this.length) {
      throw new Error('Position outside of list range');
    }

    // Начинаем с головы списка
    let current = this.head;

    // Двигаемся через все элементы используя node.next пока не достигнем нужной позиции
    for (let index = 0; index < position; index++) {
      current = current.next;
    }

    // Возвращаем узел, который нашли
    return current;
  }

  // Добавление узла в определенное место. Принимает значение и позицию (индекс)
  add(value, position) {
    // Создаем узел чтобы хранить значение
    let node = {
      value,
      next: null
    };

    // Специальный кейс, когда данные вставляются в начало списка. Устанавливаем поле "next" на текущее первое значение и потом заменяем бывшее первое новым
    if (position === 0) {
      node.next = this.head;
      this.head = node;

      // Если вставка идет в середну списка, нужно впихнуть его между текущим и передыдущим узлами
    } else {
      // Сначала находим текущий и предыдущий узлы
      let prev = this.get(position - 1);
      let current = prev.next;

      // Вставляется новый узел посредством обозначения его next поля как текущего узла и изменением поля next предыдущего узла на новый узел
      node.next = current;
      prev.next = node;
    }

    // И увеличиваем длину на 1
    this.length++;
  }

  // Удаление узла. Ищем узел по нужной позиции и вырезаем его из цепочки.
  remove(position) {
    // У нас не должно быть возможности удалить элемент из пустого списка
    if (!this.head) {
      throw new Error('Removing from empty list')
    }
    // Если удаляем первый узел то нужно просто обозначить за первый следующий элемент цепочки
    if (position === 0) {
      this.head = this.head.next;

      // Для всех других случаев нам нужно найти предыдущий узел и его next перенаправить на следующий элемент за удаляемым
    } else {
      let prev = this.get(position - 1);
      prev.next = prev.next.next;
    }

    // И декрементируем длину
    this.length--;
  }
}

// =========================================================
// Двусвязный список

// =========================================================
// чуть позже будет здесь




// =========================================================
// Дерево

// =========================================================

/**
 * We'll start off with an extremely simple tree structure. It doesn't have any
 * special rules to it and looks something like this:
 *
 *     Tree {
 *       root: {
 *         value: 1,
 *         children: [{
 *           value: 2,
 *           children: [...]
 *         }, {
 *           value: 3,
 *           children: [...]
 *         }]
 *       }
 *     }
 */

class Tree {

  /**
   * The tree has to start with a single parent, the "root" of the tree.
   */

  constructor() {
    this.root = null;
  }

  /**
   * We need a way to traverse our tree and call a function on each node in the
   * tree.
   */

  traverse(callback) {
    // We'll define a walk function that we can call recursively on every node
    // in the tree.
    function walk(node) {
      // First call the callback on the node.
      callback(node);
      // Then recursively call the walk function on all of its children.
      node.children.forEach(walk);
    }

    // Now kick the traversal process off.
    walk(this.root);
  }

  /**
   * Next we need a way to add nodes to our tree.
   */

  add(value, parentValue) {
    let newNode = {
      value,
      children: []
    };

    // If there is no root, just set it to the new node.
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // Otherwise traverse the entire tree and find a node with a matching value
    // and add the new node to its children.
    this.traverse(node => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }
}




// =========================================================
// Бинарное дерево
// =========================================================
/**
 * Бинарное дерево поиска это частный случай деревьев и оно отличается своей особенностью одинаково эффективно работать с любой операцией: доступ, поиск, вставка и удаление данных, потому что содержит их в отсортированном виде.
 *
 * Представьте последовательность чисел:
 *
 *     1  2  3  4  5  6  7
 *
 * Превращение его в дерево начиная с центра:
 *
 *              4
 *           /     \
 *        2           6
 *      /   \       /   \
 *     1     3     5     7
 *    -^--^--^--^--^--^--^-
 *     1  2  3  4  5  6  7
 *
 * Вот как работает бинарное дерево. Каждый узел может иметь два дочерних:
 *
 *     - Левый: Значение меньше чем у родительского.
 *     - Правый: Значение больше чем у родительского.
 *
 * > Важно: Чтобы все это работало, все значения которые хранит дерево должны быть уникальными.
 * Такая укладка данных делает поиск значений очень эффективным. Предположим, хотим найти 5 в дереве:
 *
 *             (4)         <--- 5 > 4, поэтому двигаемся вправо.
 *           /     \
 *        2         (6)    <--- 5 < 6, поэтому двигаемся влево.
 *      /   \       /   \
 *     1     3    (5)    7 <--- Хоба, нашли 5!
 *
 * Заметьте, что понадобилось всего лишь 3 проверки, чтобы дойти до числа 5. А если бы дерево было с 1000-ю элементов?
 *
 *   500 -> 250 -> 125 -> 62 -> 31 -> 15 -> 7 -> 3 -> 4 -> 5
 *
 * Всего 10 шагов для 1000 элементов!
 * Другая важная вещь о бинарных деревьях поиска это то что они похожи на связные списки в том смысле что при добавлении или удалении значения придется обновить только его ближайшее окружение
 */

class BinarySearchTree {

  /**
   * Same as the previous Tree, we need to have a "root" of the binary search
   * tree.
   */

  constructor() {
    this.root = null;
  }

  /**
   * In order to test if the value exists in the tree, we first need to search
   * through the tree.
   */

  contains(value) {
    // We start at the root.
    let current = this.root;

    // We're going to keep running as long as we have another node to visit.
    // If we reach a `left` or `right` that is `null` then this loop ends.
    while (current) {

      // If the value is greater than the current.value we move to the right
      if (value > current.value) {
        current = current.right;

        // If the value is less than the current.value we move to the left.
      } else if (value < current.value) {
        current = current.left;

        // Otherwise we must be equal values and we return true.
      } else {
        return true;
      }
    }

    // If we haven't matched anything then we return false.
    return false;
  }

  /**
   * In order to add items to this tree we are going to do the same traversal
   * as before, bouncing between left and right nodes depending on them being
   * less than or greater than the value we're adding.
   *
   * However, this time when we reach a `left` or `right` that is `null` we're
   * going to add a new node in that position.
   */

  add(value) {
    // First let's setup our node.
    let node = {
      value: value,
      left: null,
      right: null
    };

    // Special case for when there isn't any root node and we just need to add
    // one.
    if (this.root === null) {
      this.root = node;
      return;
    }

    // We start at the root.
    let current = this.root;

    // We're going to loop until we've either added our item or discovered it
    // already exists in the tree.
    while (true) {

      // If the value is greater than the current.value we move to the right.
      if (value > current.value) {

        // If `right` does not exist, set it to our node, and stop traversing.
        if (!current.right) {
          current.right = node;
          break;
        }

        // Otherwise just move on to the right node.
        current = current.right;

        // If the value is less than the current.value we move to the left.
      } else if (value < current.value) {

        // If `left` does not exist, set it to our node, and stop traversing.
        if (!current.left) {
          current.left = node;
          break;
        }

        // Otherwise just move on to the left node.
        current = current.left;

        // If the number isn't less than or greater, then it must be the same and
        // we don't do anything.
      } else {
        break;
      }
    }
  }
}
