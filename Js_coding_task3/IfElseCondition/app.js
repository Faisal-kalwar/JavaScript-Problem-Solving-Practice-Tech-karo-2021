var marks;
marks = prompt( "Please input the mark(%)" );

if (marks < 0 || marks > 100)
{
alert('Invalid mark, outside range 0-100');
}
else if( marks >= 80 )
{
    console.log("A");
}
else if( marks >= 70 )
{
    console.log("B+");
}
else if( marks >= 50 )
{
    console.log("C");
}
else
{
    console.log("fail");
}