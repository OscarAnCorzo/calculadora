<%
    Float numero1 = Float.parseFloat(request.getParameter("numero1"));
    
    Float numero2 = Float.parseFloat(request.getParameter("numero2"));
    
    String signo = request.getParameter("signo");
    
    Float resultado;

    if(signo.equals( "+")){
        resultado = numero1 + numero2;
    } else{
        if(signo.equals( "-")){
            resultado = numero1 - numero2;
        } else{
            if(signo.equals( "*")){
                resultado = numero1 * numero2;
            } else{
                resultado = numero1 / numero2;
            }
        }
    }

    String respuesta = "{\"resultado\": " + Float.toString(resultado) + "}";
    out.print(respuesta);
%>