//
//  Run at http://ascii.jp/elem/000/000/760/760389/
//

var lis = $$('#mainC > ul > li');
for(i=lis.length; i>0; i--){
    $$('#mainC > ul')[0].appendChild(lis[i-1]);
}
