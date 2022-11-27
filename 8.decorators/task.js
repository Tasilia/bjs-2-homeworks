function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.join(","); // получаем правильный хэш
      let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
      if (objectInCache) { // если элемент найден
          console.log("Из кэша: " + objectInCache.value);
          return "Из кэша: " + objectInCache.value;
      }

      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({hash: hash, value: result}) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }
  return wrapper;
  }


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let count = 0;
  let allCount = 0;
  let isActive = true;
  function wrapper(...args) {
    wrapper.allCount = allCount++;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if(isActive) {
      isActive = false;
      wrapper.count = count++;
      func(...args);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      wrapper.count = count++;
      func(...args);
    }, delay);
  }
  return wrapper;
}
