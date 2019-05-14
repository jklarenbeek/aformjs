

// TODO convert to return of compiled function
export default function format(match, ...args) {
  // https://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/

  // function format(string) {
  //   var args = arguments;
  //   var pattern = RegExp("%([1-" + (arguments.length-1) + "])", "g");
  //   return string.replace(pattern, function(match, index) {
  //       return args[index];
  //   });
  // };

  // format("a %1 and a %2", "cat", "dog");
  // //"a cat and a dog"

  const pattern = RegExp('%([0-' + args.length + '])', 'g');
  return match.replace(pattern, (_, index) => args[index]);
}

// format("a %1 and a %2", "cat", "dog")
