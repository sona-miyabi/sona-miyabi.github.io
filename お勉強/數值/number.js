let a=[
parseFloat("0.0314E+2"),                      // 3.14
parseFloat("3.14"),                           // 3.14
parseFloat("3.14more non-digit characters"),  // 3.14
parseFloat("314e-2"),                         // 3.14
parseFloat("999 888"),           // 999
parseFloat("FF2"),               // NaN
parseFloat('+421'),              // 421
parseFloat('-421'),              // -421
parseFloat('-Infinity'),         // -Infinity
parseFloat('.421'),              // 0.421
parseFloat('421'),               // 421
parseFloat('421.'),              // 421
parseFloat('421.421'),           // 421.421
parseFloat('421e+0'),            // 421
parseFloat('421hop'),            // 421
parseFloat('hop1.61803398875'),  // NaN
parseFloat('Infinity'),          // Infinity
]
console.log(a)

console.log(parseInt('123.5') )