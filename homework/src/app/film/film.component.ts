import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  filmTitle:string;
  detail:string;
  src:string;
  actor:string;
  number:number;
  type:string;
  time:string;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.filmTitle=this.routeInfo.snapshot.params["title"];
    if(this.filmTitle=="深海越狱"){
      this.src="../../assets/img/dy1.webp";
      this.detail="中情局特工维勒（尚格·云顿 饰）与美女搭档梅尔在保护一份机密文件的任务中被神秘组织追杀，梅尔牺牲，维勒被逮捕。醒来时维勒发现自己被囚禁在一艘核潜艇内，这里是CIA设在深海的一座与世隔绝的黑狱，他自己也变成了出卖国家机密的叛徒身份。 除了拷打维勒的探员帕特里克，潜艇上还有维勒的恩师爱德华、女见习生凯茜和被关押的德国特工马可（杜夫·龙格尔 饰），他们当中谁是盟友，谁是敌人？有人对维勒手中的机密文件感兴趣，有人却对离开深海恢复自由更感兴趣。维勒必须寻找队友，携手逃出生天，并自证清白……";
      this.actor="尚格·云顿 / 杜夫·龙格尔 / 杰思敏·沃兹";
      this.number=4.5;
      this.time="2018-06-08";
      this.type="热血 / 激情";
    }
    else if(this.filmTitle=="侏罗纪世界2"){
      this.src="../../assets/img/dy7.webp";
      this.detail="侏罗纪世界主题公园及豪华度假村被失控的恐龙们摧毁已有三年。如今，纳布拉尔岛已经被人类遗弃，岛上幸存的恐龙们在丛林中自给自足。 当岛上的休眠火山开始活跃以后，欧文（克里斯·帕拉特 饰）与克莱尔（布莱丝·达拉斯·霍华德 饰）发起了一场运动，想要保护岛上幸存的恐龙们免于灭绝。 欧文一心想要找到自己依然失踪在野外的迅猛龙首领布鲁，克莱尔如今也尊重起这些生物，以保护它们为己任。两人在熔岩开始喷发时来到了危险的小岛，他们的冒险也揭开了一个可能让地球回到史前时代般混乱秩序的阴谋。";
      this.actor="克里斯·帕拉特 / 布莱丝·达拉斯·霍华德 / 贾斯蒂斯·史密斯 / 伊莎贝拉·瑟蒙 / 拉菲·斯波";
      this.number=4.0;
      this.time="2018-06-15";
      this.type="动作 / 科幻 / 冒险";
    }
    else if(this.filmTitle=="厕所英雄"){
      this.src="../../assets/img/dy2.webp";
      this.detail="改编自真人真事，探讨印度农村家庭普遍没有厕所，妇女必须在野外如厕的现象。女主角担任教师，嫁给男主角后，发现家中没有厕所，和男主角“闹离婚”，还来了一场革命";
      this.actor="阿克谢·库玛尔 / 阿努潘·凯尔 / 布米·佩德卡尔 ";
      this.number=4.0;
      this.time="2018-06-08";
      this.type="教育 / 宗教 /民族 ";
    }
    else if(this.filmTitle=="无问西东"){
      this.src="../../assets/img/dy10.webp";
      this.detail="如果提前了解了你所要面对的人生，你是否还会有勇气前来？吴岭澜、沈光耀、王敏佳、陈鹏、张果果，几个年轻人满怀诸多渴望，在四个非同凡响的时空中一路前行。  吴岭澜（陈楚生 饰），出发时意气风发，却很快在途中迷失了方向。沈光耀（王力宏 饰），自愿参与了最残酷的战争，他一直在努力去做那些令他害怕，但重要的事。王敏佳（章子怡 饰）最初的错误，只是为了虚荣撒了一个小谎；最初的烦恼，只是在两个优秀的男人中选择一个。但命运，却把她拖入被众人唾骂的深渊。陈鹏（黄晓明 饰）把爱情摆在了理想前面，但爱情却没有把他摆在前面。他说，“我有人要照顾”，纵然这意味着与所有人作对，意味着要和她一起被放逐千里。张果果（张震 饰），身处尔虞我诈的职场，“赢”是他的习惯。为了赢，他总是见招拆招，先发制人。而有一天，他却面临了一个比“赢”更重要的选择。这几个年轻人，在最好的年纪迎来了最残酷的考验,并成就了永不褪色的青春传奇。";
      this.actor="章子怡 / 黄晓明 / 张震 / 王力宏 / 陈楚生 ";
      this.number=4.3;
      this.time="2018-01-12";
      this.type=" 剧情 / 爱情 / 战争 ";
    }
  }

}
