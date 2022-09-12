function sortNumbers(a,b,c) {

    let x = 0;

    if (b<a)
            {
                x = a;
                a = b;
                b = x;
            }
            else if(c<a)
            {
                x = c;
                c = a;
                a = x;
            }
            else if(c<b)
            {
                x = c;
                c = b;
                b = x;
            }
            else if(a==b)
            {
                x = a;
                a = b;
                b = x;
            }
            else if(a==c)
            {
                x = a;
                a = c;
                c = x;
            }
            else if(b==c)
            {
                x = b;
                b = c;
                c = x;
            }
            console.log(c);
            console.log(b);
            console.log(a);
}
sortNumbers(1,2,3)