1. Sự khác biệt nhé giữa let, const và var
   _ scope (Phạm vị)
   var -> global
   const, let: function, block
   _ assignment
   const: không thể re-assign
   let và var là có thể \* hoisting
   var có thể sử dụng trước khi khai báo
   let, const
2. ES6

- map :là một kiểu thu thập dữ liệu trong đó dữ liệu được lưu trữ dưới dạng các cặp. Nó chứa một khóa duy nhất. Giá trị được lưu trữ trong Map phải được ánh xạ tới khóa. Chúng tôi không thể lưu trữ một cặp trùng lặp trong Map ()

-filter: là 1 tính năng cơ bản trong reactjs, cách thông thường là để user nhập 1 form để dev lấy thông tin mang đi call API để BE filter hoặc tự filter trên local, đám thông tin đó sẽ được lưu vào state component hoặc store

- reduce: là một phương thức sẵn có được sử dụng để thực thi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất. Là một phương thức quan trọng hay sử dụng trong lập trình hàm.

- some : nếu một phần tử nào đó thỏa với chương trình trong hàm callback thì hàm some sẽ return true

  // Arrow function
  some((element) => { ... } )
  some((element, index) => { ... } )
  some((element, index, array) => { ... } )

  // Callback function
  some(callbackFn)
  some(callbackFn, thisArg)

  // Inline callback function
  some(function callbackFn(element) { ... })
  some(function callbackFn(element, index) { ... })
  some(function callbackFn(element, index, array){ ... })
  some(function callbackFn(element, index, array) { ... }, thisArg)

- every: là một phương thức dành cho đối tượng mảng trong javascript. Công dụng của hàm này là giúp kiểm tra tất cả các phần tử trong mảng có thõa mãn một điều kiện nào đó hay không. Nếu tất cả phần tử đều thỏa thì sẽ trả về true, ngược lại nếu chỉ cần một phần tử không thỏa thôi là nó sẽ trả về false
  array.every(function(currentValue, index, arr), thisValue)

- find: sẽ lần lượt sử dụng các phần tử của mảng để thực hiện hàm kiểm tra cho đến khi có giá trị thỏa mãn và hàm kiểm tra trả về true. Khi đó hàm find sẽ trả về giá trị của phần tử thỏa mãn và bỏ qua không kiểm tra các phần tử còn lại.
  array.find(function(currentValue, index, arr),thisValue)

- findIndex đây là hàm dùng để tìm vị trí đầu tiên của phần tử được tìm thấy thỏa điều kiện nào đó
  Hàm findIndex sẽ trả về key của phần tử đầu tiên trong mảng thỏa mãn được điều kiện kiểm tra
  array.findIndex(function(currentValue, index, arr),thisValue)
- for with index (for(let i = 0; i < nums.lentgh ; i++))
- for in
- for of
- for each

3. Spread operator (...) : một cách rất hữu dụng và ngắn gọn để dùng trong các thao tác với mảng như thêm phần tử vào mảng, kết hợp mảng (hoặc object), truyền tham số mảng vào function, ...
4. String template (literals string)  
   5. Arrow function - Có bao nhiêu loại function
   // Arrow function
   const sayHello = () => {
   console.log("Hello !");
   }
   sayHello();
   // Anonymous functions
   var showDomain = function()
   {
   alert('Học Javascript tại Freetuts.net');
   };
   showDomain();
   // Function có một tham số và trả về một giá trị cụ thể
   function square(number) {
   return number \* number;
   }
   console.log(square(2));
   // Function có thể có nhiều đối số (thực tế có thể có 'n' đối số)
   // Function lấy function như một tham số(callback funtion)
   https://viblo.asia/p/co-ban-ve-cac-loai-function-trong-javascript-Az45bGdzKxY - Sự khác biệt giữa các loại function - Tại sao ES6 arrow function const getSum = (nums) => {} (bind, call, this) 6. Destructuring - Object destructuring - Array destructuring 7. Promise: cách tự tạo 1 cái promise, mỗi cái promise có state, cách handle promise => async/await, event-loop 8. Class
