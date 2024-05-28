const accountId = 134234;
let accountEmail = "aakash83274@gmail.com";
var accountPassword = "12345655";
accountCity = "Jaipur";
let accountState;

// accountId = 2;

accountEmail = "aka.aka@gmail.com"
accountPassword = "12121221"
accountCity = "Dausa"
accountState = "Rajasthan"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

// हमने JavaScript basic tutorial में var keyword का use करके variable create करने का तरीका बताया था लेकिन var के अलावा let और const keywords के जरिये भी वेरिएबल बनाये जा सकते हैं। लेकिन इन तीनो keywords से बनाये गये variables के बीच कुछ अंतर होता है, जिनके बारे में आज हम इस article में चर्चा करने वाले हैं।

// JavaScript var vs let vs const
// Var Keyword

// Var का use करके variable बनाने का तरीका बहुत पुराना है और आजकल modern scripts में आपको यह देखने को कम ही मिलेगा हाँ यदि आप किसी पुराने programs को देखें तो वहां इसका उपयोग जरुर देखने को मिलेगा इस लिए आपको इसकी जानकारी भी होनी चाहिए।

// Var का Scope:  किसी variable के scope का मतबल एक ऐसे area से है जहाँ उस वेरिएबल को access किया जा सकता है। 
// var keyword से create किये गये variable का scope global भी हो सकता है और local भी 
// Global scope का मतलब उस वेरिएबल को declare करने के बाद script में कहीं पर भी use किया जा सकता है।
// Local variable का मतलब यह उस वेरिएबल को script के किसी particular area में ही उपयोग किया जा सकता है।
// var keyword से यदि किसी function के बाहर variable को declare किया जाए तो वह global variable होगा, वहीँ यदि किसी function के अंदर वेरिएबल बनाया जाय तो उसका scope केवल उसी function के अंदर ही होगा और वह एक local variable कहलायेगा।
// var variable को script में एक से अधिक बार re-declare किया जा सकता है और उसकी value को बार-बार update में कर सकते हैं।
// इन सारे points को समझने के लिए आप नीचे दिये गये examples को देखें:
// var im_global = "Hello everyone";
// function sayhi(){
// var im_local = "Hi";
// }
// इस उदाहरण में हमने var keyword का use करके im_global और im_local नाम के दो variables create किया है।
// im_global को function के बाहर declare किया है इसलिए यह global variable है जबकि im_local को function के अंदर declare किया गया है जिसका scope उस function के अंदर ही है और इसे function के बाहर use नही किया जा सकता इसलिए यह एक local variable है।

// यदि हम im_local को function के बाहर access करें तो क्या होगा?
// var im_global = "Hello everyone";
// function sayhi(){
// var im_local = "Hi";
// }
// alert(im_local);  // Error: im_local is undefined
// Local variable को उसके scope से बाहर access नही किया जा सकता, ऐसा करने पर error आएगा।
// Var variable को re-declare भी किया जा सकता है। जैसे:
// var website = "google.com";
// var website = "webinhindi.com";
// इसके अलावा इसे एक बार declare करके इसकी value को बार-बार update भी कर सकते हैं। जैसे:
// var language = "English";
// language = "Hindi";
// Var की कमजोरी यह है की यदि किसी global variable को if statement block के अंदर re-declare करके value assign किया जाता है तो global variable की value भी update हो जाती है। 
// इसका उदाहरण देखें:
// var value=10;
// if(true){
// value=20;
// }
// alert(value); // 20
// अब नीचे के उदाहरण में देखें यदि variable को if block के अंदर declare किया जाय तो वह उस block से बाहर भी visible होगा।


// if(true){
// var marks=30;
// }
// alert(marks); // 30
// ठीक ऐसा ही loop के साथ भी होता है।

// for (var i = 0; i < 10; i++){
//  // ...
// }
// alert(i); // 10, i ki value loop se bahar bhi visible hai. yah global variable ban jata hai.
// हालांकि यह कोई समस्या नही है लेकिन ऐसी स्थिति में आपको विशेष ध्यान रखना होगा की variable की value बिना गलती से override ना हो जाए।

// Let KeywordLet भी var की तरह ही है लेकिन आजकल var की जगह let का use होता है क्योंकि var में जो कमियां थीं उन्हें let keyword में दूर किया गया है।

// let के जरिये हम block scoped variable बना सकते हैं। यहाँ block का मतलब उस हिस्से से है जो की curly braces {} के अंदर होता है। block के अंदर let keyword से declare किया गया variable सिर्फ उसी block के अंदर ही available होगा।
// let variable को update तो किया जा सकता है लेकिन var की तरह एक ही block में बार-बार re-declare नही किया जा सकता। हाँ हम same variable को अलग-अलग block में declare कर सकते हैं।
// चलिए अब इन points को समझने के लिए कुछ examples देखते हैं:
// if(true){
// let marks = 60;
// alert(marks); //output 60
// }
// alert(marks); // error: marks is not defined
// इस उदाहरण में आप देख सकते हैं की हम if block के अंदर declare किये गये variable को block से बाहर access नही कर सकते जबकि var के साथ ऐसा किया जा सकता था।

// हम variable को same block में update तो कर सकते हैं लेकिन re-declare नही कर सकते:

// let marks = 50;
// marks = 60;
// लेकिन नीचे के उदाहरण में error आएगा क्योंकि हम यहाँ एक ही block में दो बार variable declare कर रहें हैं जो की let में allow नही है।


// let time = 2;
// let time = 3; // syntax error
// लेकिन हम अलग-अलग scope में same name के variable को re-declare कर सकते हैं जैसे:

// let quantity = 10;
// if(true){
// let quantity =11;
// alert(quantity); // output 11
// }
// alert(quantity); // output 10
// यहाँ पर हमने quantity नाम से दो variables declare किये हैं लेकिन फिर भी कोई error नही है क्योंकि इन दोनों के scope अलग-अलग हैं और इसी वजह से इन्हें अलग-अलग समझा जाता है भले ही इनके नाम एक जैसे क्यों न हों।

// Const Keywordयदि किसी variable की value हमेशा constant रखनी है यानि की change नही करनी है तो ऐसी स्थिति में constant variable का use किया जाता है और ऐसे वेरिएबल को बनाने के लिए const keyword का उपयोग होता है।

// Const variable में एक बार value assign करने के बाद दुबारा उसे update नही किया जा सकता।
// इसे re-declare भी नही किया जा सकता।
// Const variable को declare करते समय उसे initialize यानि value assign करना जरुरी है।
// Let की तरह const variable भी block scoped होता है यानि जिस block अंदर declare किया गया हो उसी block में ही उसे access किया जा सकता है।
// चलिए अब const variable के उदाहरण देखते हैं:
// Const variable को update और re-declare नही कर सकते ऐसा करने से error आएगा जैसे:
// const DOB = '22.05.1993';
// DOB = '25.05.1992'; // error can't reassign the constant
// इसे दोबारा declare भी नही किया जा सकता:
// const ADMIN = 'Amit';
// const ADMIN = 'Vinay'; // error can't re-declare the constant
// उम्मीद है आपको JavaScript में var, let और const keywords के बीच क्या अंतर है और variable बनाते समय इनमे से कौन से keyword का कब और क्यों use करना चाहिए यह समझ आ गया होगा।

// यदि आप कोई सवाल पूछना चाहते हैं  या सुझाव देना चाहते हैं तो नीचे comment box का जरुर उपयोग करें।