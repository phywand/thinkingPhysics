(function(window){
    "use strict";
    var Main = function () {
        this.fileName='';
        this.webTitle='';
        this.transition_properties={};
        this.frameDetails=[];
        this.extremities={width:0,height:0};
        this.overviewProperties={x:0,y:0,scale:1,ease:'linear'};
        this.element_ids=[];
    };

    Main.prototype.init = function(transition_properties,overview_properties){

        this.transition_properties=transition_properties;
        this.overviewProperties.scale=overview_properties.overview_data_scale;
        this.overviewProperties.ease=overview_properties.overview_data_ease;
        var that=this;
        var link=this.getURLParameter("file");
        var reqObj=new XMLHttpRequest();
        reqObj.open("GET",link,false);
        reqObj.onload=function()
        {
            if(reqObj.status==200||reqObj.status==0)
            {
                that.getFileName(reqObj.response);
                that.getWebTitle(reqObj.response);
                that.getFrameDetails(reqObj.response);
                if(that.mobileAndTabletcheck()==false)
                {
                    document.getElementById('mobile-hint').style.display='none';
                }
                else
                {
                    document.getElementById('browser-hint').style.display='none';
                }
                setTimeout(function()
                {
                    var hint=document.getElementById('hint-block');
                    hint.style.transform='scale(0)';

                    hint.style.webkitTransform='scale(0)';
                    hint.style.transitionDuration='200ms';

                    hint.style.webkitTransitionDuration='200ms';
                },2500);
            }
            else {
                document.getElementById('hint-block').style.display='none';
                alert("Cannot find specified file");
            }
        };
        reqObj.send();


    };

    Main.prototype.mobileAndTabletcheck=function()
    {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    Main.prototype.getURLParameter=function(name)
    {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
    };

    Main.prototype.getFileName=function(res)
    {
        var match,identifier;
        match = XRegExp.match(res,/FileName: (.*)/);
        if(match){
            identifier = XRegExp.split(match,": ")[1];
            this.fileName = identifier;
        }
    };

    Main.prototype.getWebTitle=function(res)
    {
        var match,identifier;
        match = XRegExp.match(res,/WebTitle: (.*)/);
        if(match){
            identifier = XRegExp.split(match,": ")[1];
            this.webTitle = identifier;
        }
        document.getElementById('title').innerHTML=this.webTitle;
        document.getElementById('hint-title').innerHTML=this.webTitle;
        document.getElementById('hint-block').style.width='50%';
    };

    

    Main.prototype.getFrameDetails=function(res)
    {
        var arr=res.split('StepPane{');
        if(arr[0].indexOf("TransitionSize")>=0)
        {
            this.transition_properties.size=parseInt(arr[0].split('{')[1].split('}')[0]);
        }
        arr.splice(0,1);
        this.parseResponse(arr);
    };

    Main.prototype.parseResponse=function(res)
    {
        for(var i=0;i<res.length;i++)
        {
            this.frameDetails.push({type:'StepPane',str:'{'+res[i].split('TransitionStep{')[0]});
            if(res[i].split('TransitionStep{')[1]!=undefined)
            {
                this.frameDetails.push({type:'TransitionStep',str:'{'+res[i].split('TransitionStep{')[1]});
            }

        }
        for(var j=0;j<this.frameDetails.length;j++)
        {

            var arr=this.frameDetails[j].str.split('{');

            if(this.frameDetails[j].type=='StepPane')
            {
                this.frameDetails[j].properties={};
                this.frameDetails[j].properties.name=arr[1].split('}')[0];
                this.frameDetails[j].properties.url=arr[2].split('}')[0];
                this.frameDetails[j].properties.width=parseInt(arr[3].split('}')[0]);
                this.frameDetails[j].properties.height=parseInt(arr[4].split('}')[0]);
            }
            else
            {
                this.frameDetails[j].properties={};
                this.frameDetails[j].properties.url=arr[1].split('}')[0];
                var str=arr[2].split('}')[0];
                var match = XRegExp.match(str,/Down(.*)/);
                var identifier;
                if(match){
                    identifier = XRegExp.split(match,"Down")[1];
                    this.frameDetails[j].properties.align=[];
                    this.frameDetails[j].properties.align.push('Down');
                    this.frameDetails[j].properties.align.push(identifier);
                }
                else
                {
                    match=XRegExp.match(str,/Right(.*)/);
                    if(match){
                        identifier = XRegExp.split(match,"Right")[1];
                        this.frameDetails[j].properties.align=[];
                        this.frameDetails[j].properties.align.push('Right');
                        this.frameDetails[j].properties.align.push(identifier);
                    }
                }
            }
        }

        this.frameDetails[0].properties.x=0;
        this.frameDetails[0].properties.y=0;
        var x1=100000,y1=100000,x2=-99999,y2=-99999;
        x1=-this.frameDetails[0].properties.width/2;
        y1=-this.frameDetails[0].properties.height/2;
        for(j=1;j<this.frameDetails.length;j++)
        {
            if(this.frameDetails[j].type=='StepPane')
            {
                if(this.frameDetails[j-1].properties.align[0]=='Down')
                {
                    this.frameDetails[j].properties.y=this.frameDetails[j-2].properties.y+this.frameDetails[j-2].properties.height/2+this.frameDetails[j].properties.height/2+this.transition_properties.size+this.transition_properties.offset*2;
                    if(this.frameDetails[j-1].properties.align[1]=='Centre')
                    {
                        this.frameDetails[j].properties.x=this.frameDetails[j-2].properties.x;
                    }
                    else if(this.frameDetails[j-1].properties.align[1]=='Left')
                    {
                        this.frameDetails[j].properties.x=(this.frameDetails[j-2].properties.x+this.frameDetails[j].properties.width/2)-this.frameDetails[j-2].properties.width/2;
                    }
                    else if(this.frameDetails[j-1].properties.align[1]=='Right')
                    {
                        this.frameDetails[j].properties.x=(this.frameDetails[j-2].properties.x-this.frameDetails[j].properties.width/2)+this.frameDetails[j-2].properties.width/2;
                    }
                    if(this.overviewProperties.y<this.frameDetails[j].properties.y/2)
                    {
                        this.overviewProperties.y=this.frameDetails[j].properties.y/2;
                    }
                }
                else
                {
                    this.frameDetails[j].properties.x=this.frameDetails[j-2].properties.x+this.frameDetails[j-2].properties.width/2+this.frameDetails[j].properties.width/2+this.transition_properties.size+this.transition_properties.offset*2;
                    if(this.frameDetails[j-1].properties.align[1]=='Centre')
                    {
                        this.frameDetails[j].properties.y=this.frameDetails[j-2].properties.y;
                    }
                    else if(this.frameDetails[j-1].properties.align[1]=='Top')
                    {
                        this.frameDetails[j].properties.y=(this.frameDetails[j-2].properties.y+this.frameDetails[j].properties.height/2)-this.frameDetails[j-2].properties.height/2;
                    }
                    else if(this.frameDetails[j-1].properties.align[1]=='Bottom')
                    {
                        this.frameDetails[j].properties.y=(this.frameDetails[j-2].properties.y-this.frameDetails[j].properties.height/2)+this.frameDetails[j-2].properties.height/2;
                    }
                    if(this.overviewProperties.x<this.frameDetails[j].properties.x/2)
                    {
                        this.overviewProperties.x=this.frameDetails[j].properties.x/2;
                    }
                }
                if(this.frameDetails[j].properties.x-this.frameDetails[j].properties.width/2<=x1)
                {
                   /// console.log("x1"+j,this.frameDetails[j].properties.x-this.frameDetails[j].properties.width/2);
                    x1=this.frameDetails[j].properties.x-this.frameDetails[j].properties.width/2;
                }
                    
                if(this.frameDetails[j].properties.y-this.frameDetails[j].properties.height/2<=y1)
                {
                   // console.log("y1"+j,this.frameDetails[j].properties.y-this.frameDetails[j].properties.height/2);
                    y1=this.frameDetails[j].properties.y-this.frameDetails[j].properties.height/2;
                }
                    
                if(this.frameDetails[j].properties.x+this.frameDetails[j].properties.width/2>=x2)
                {
                    //console.log("x2"+j);
                    x2=this.frameDetails[j].properties.x+this.frameDetails[j].properties.width/2;
                }
                    
                if(this.frameDetails[j].properties.y+this.frameDetails[j].properties.height/2>=y2)
                {
                   // console.log("y2"+j);
                    y2=this.frameDetails[j].properties.y+this.frameDetails[j].properties.height/2;
                }
                    
            }

        }
        for(j=0;j<this.frameDetails.length;j++)
        {
            if(this.frameDetails[j].type!='StepPane')
            {
                if(this.frameDetails[j].properties.align[0]=='Down')
                {
                    if(this.frameDetails[j-1].properties.width<=this.frameDetails[j+1].properties.width)
                    {
                        this.frameDetails[j].properties.x=this.frameDetails[j-1].properties.x;

                    }
                    else
                    {
                        this.frameDetails[j].properties.x=this.frameDetails[j+1].properties.x;

                    }
                    this.frameDetails[j].properties.y=this.frameDetails[j-1].properties.y+this.frameDetails[j-1].properties.height/2+this.transition_properties.offset+this.transition_properties.size/2;
                }
                else if(this.frameDetails[j].properties.align[0]=='Right')
                {
                    if(this.frameDetails[j-1].properties.height<=this.frameDetails[j+1].properties.height)
                    {
                        this.frameDetails[j].properties.y=this.frameDetails[j-1].properties.y;

                    }
                    else
                    {
                        this.frameDetails[j].properties.y=this.frameDetails[j+1].properties.y;

                    }
                    this.frameDetails[j].properties.x=this.frameDetails[j-1].properties.x+this.frameDetails[j-1].properties.width/2+this.transition_properties.offset+this.transition_properties.size/2;

                }
            }
        }
        this.extremities.width=x2-x1;
        this.extremities.height=y2-y1;
        this.overviewProperties.y=y1+this.extremities.height/2;
        this.overviewProperties.x=x1+this.extremities.width/2;
        this.createFrames();
    };

    Main.prototype.createFrames=function()
    {
        var ele=document.createElement('div');
        ele.setAttribute('id','overview');
        ele.setAttribute('class','step');
        ele.setAttribute('data-x',''+this.overviewProperties.x);
        ele.setAttribute('data-y',''+this.overviewProperties.y);
        if(window.innerWidth<window.innerHeight)
        {
            this.overviewProperties.scale=this.extremities.width/window.innerWidth/this.extremities.width;

        }
        else
        {
            this.overviewProperties.scale=this.extremities.height/window.innerHeight;
        }
//         console.log(window.innerHeight/window.innerWidth);
        this.overviewProperties.scale=0.1+(this.extremities.width/window.innerWidth>this.extremities.height/window.innerHeight?this.extremities.width/window.innerWidth:this.extremities.height/window.innerHeight);
        
        ele.setAttribute('data-scale',''+this.overviewProperties.scale);
        if(this.overviewProperties.ease!=null&&this.overviewProperties.ease!=undefined)
        {
            ele.setAttribute('data-ease',this.overviewProperties.ease);
        }
        var _root=document.getElementById('impress');
        _root.appendChild(ele);

        var count=1;
        
        var element_count=0;
        var li=document.createElement('li');
        li.setAttribute("data-pane-id",element_count);
        li.innerHTML="<a href='#/overview'>Overview</a>"
        // li.innerText=this.frameDetails[i].properties.name;
        // li.addEventListener("click",function(e){
        //     api.goto(e.currentTarget.getAttribute("data-pane-id"));
        // });
        document.getElementsByClassName("pane-list")[0].appendChild(li);

        for(var i=0;i<this.frameDetails.length;i++)
        {

            if(this.frameDetails[i].type=='StepPane')
            {
                element_count++;
                this.element_ids.push(element_count);
                var ele1=document.createElement('div');
                ele1.setAttribute('id',this.frameDetails[i].properties.name);
                ele1.setAttribute('class','step');
                ele1.setAttribute('data-x',''+this.frameDetails[i].properties.x);
                ele1.setAttribute('data-y',''+this.frameDetails[i].properties.y);
               // ele1.style.width=this.frameDetails[i].properties.width+'px';
               // ele1.style.height=this.frameDetails[i].properties.height+'px';
                if(i<=0&&this.overviewProperties.ease!=null&&this.overviewProperties.ease!=undefined)
                {
                    ele1.setAttribute('data-ease',this.overviewProperties.ease);
                }
                ele1.innerHTML='<object width="'+this.frameDetails[i].properties.width+'" height="'+this.frameDetails[i].properties.height+'" type="text/html" data="'+this.frameDetails[i].properties.url+'" ></object>';
                _root.appendChild(ele1);
                var li=document.createElement('li');
                li.setAttribute("data-pane-id",element_count);
                li.innerHTML="<a href='#/"+this.frameDetails[i].properties.name+"'>"+this.frameDetails[i].properties.name+"</a>"
                // li.innerText=this.frameDetails[i].properties.name;
                // li.addEventListener("click",function(e){
                //     api.goto(e.currentTarget.getAttribute("data-pane-id"));
                // });
                document.getElementsByClassName("pane-list")[0].appendChild(li);

                _root.appendChild(document.createElement('div'));

            }
            else
            {
                element_count++;
                var ele2=document.createElement('div');
                ele2.setAttribute('id','transition'+count);
                ele2.setAttribute('class','step');
                ele2.setAttribute('data-x',''+this.frameDetails[i].properties.x);
                ele2.setAttribute('data-y',''+(this.frameDetails[i].properties.y));
                ele2.setAttribute('data-z',''+this.transition_properties.data_z);
                ele2.setAttribute('data-scale',''+this.transition_properties.data_scale);
               // ele2.style.width=this.transition_properties.size+'px';
               // ele2.style.height=this.transition_properties.size+'px';
                ele2.innerHTML='<object width="'+this.transition_properties.size+'" height="'+this.transition_properties.size+'" type="text/html" data="'+this.frameDetails[i].properties.url+'" ></object>';
                count++;
                _root.appendChild(ele2);
                _root.appendChild(document.createElement('div'));
            }

//             console.log(_root.getBoundingClientRect());

        }
    };

    window.Main = new Main();
})(window);