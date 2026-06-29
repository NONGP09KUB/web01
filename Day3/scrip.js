for ( i = 1; i < 5; i++) {
    document.write("<h" + i + ">This is iteration number " + i + "</h" + i + ">");
}

for ( i = 1; i < 5; i++) {
    for ( j = 1; j <= i; j++) {
        document.write("<img src='https://www.naturepl.com/siteowner/pages/pageimages/aboutmain/about-main.jpg' alt='Placeholder Image' style='width:10%; height:10%;'>");
    }
    document.write("<br>");

}

