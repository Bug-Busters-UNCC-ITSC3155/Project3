class TableTemplate{

    static fillIn(id,dict,columnName = " "){
        var table = document.getElementById(id);
        var rowCount = table.rows.length;
        var colCount = table.rows[0].cells.length;
        console.log(rowCount);
        console.log(colCount);
        var storage = "";
        var indices = table.rows.item(0).cells;

        var indexFill = null;
        //replaces strings in first row
        for(var j = 0; j < colCount;j++){
            
            storage = String(indices.item(j).innerHTML);
            indices[j].innerHTML = this.extractString(storage,dict);
            if(indices[j].innerHTML == columnName){
                indexFill = j;
            }
        }
        
        //change whole table since not specified
        if(columnName == " "){
            for(var i = 1; i < rowCount;i++){
                var indices = table.rows.item(i).cells;
                for(var j = 0; j < colCount;j++){
                    storage = String(indices.item(j).innerHTML);
                    indices[j].innerHTML = this.extractString(storage,dict);
                }
            }
        //if is specified
        } else if( indexFill != null){
            for(var i = 1; i < rowCount;i++){
                var indices = table.rows.item(i).cells;
                storage = String(indices.item(j).innerHTML);
                indices[indexFill].innerHTML = this.extractString(storage,dict);
            }
        } 


    } 
    //replace string function
    static extractString(str,dict){
        var regex = /{{.*}}/g;
        var arr = []
        while(arr = regex.exec(str) != null){
            for(var key in dict){
                //arr[1] is the matched string so regex({{a}}) = a -> arr[1]
                if(dict[key] == arr[1]){
                    str = str.replace("{{"+arr[1]+"}}",dict[key])
                }
            }
        }
        return str;
    }

}