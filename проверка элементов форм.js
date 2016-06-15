var height, war;
function initiate(){
    // ��� ����
    height = document.getElementById('height');
    height.addEventListener('input', function(){
        if(height.value > 3){
            err(height, '��� ����� �� � 1 ���� ����� �������');
        }else{
            non(height);
        }
    });

    // ����� ����
    weight = document.getElementById('weight');
    weight.addEventListener('input', function validate_weight(){
        if(weight.value > 1000){
            err(weight, '������� ������� �����');
        }else{
            non(weight);
        }
    });

    // �����������
    temp_v1 = document.getElementById('temp_v1');
    temp_v1.addEventListener('input', function(){
        if(temp_v1.value > "36,9" || temp_v1.value < "36,0"){
            err(temp_v1, '����� �� 36,0 �� 36,9');
        }else{
            non(temp_v1);
        }
    });

    // ���, ��./���.
    hr_v1 = document.getElementById('hr_v1');
    hr_v1.addEventListener('input', function(){
        if(hr_v1.value > 90 || hr_v1.value < 60){
            err(hr_v1, '����� �� 60 �� 90');
        }else{
            non(hr_v1);
        }
    });

    //������������� ��, ��.��.��:
    sysbp_v1 = document.getElementById('sysbp_v1');
    sysbp_v1.addEventListener('input', function(){
        if(sysbp_v1.value > 140 || sysbp_v1.value < 100){
            err(sysbp_v1, '����� �� 100 �� 140');
        }else{
            non(sysbp_v1);
        }
    });

    //�������������� ��
    diabp_v1 = document.getElementById('diabp_v1');
    diabp_v1.addEventListener('input', function(){
        if(diabp_v1.value > 90 || diabp_v1.value < 70){
            err(diabp_v1, '����� �� 70 �� 90');
        }else{
            non(diabp_v1);
        }
    });

    //���������� �������� ������������������������ ���1
    fev1_5 = document.getElementById('fev1_5');
    fev1_5.addEventListener('input', function(){
        //ekg_hr_min = document.querySelectorAll();
        if(fev1_5.value > 12){
            err(fev1_5, '�������� ������ ���� ����� 12');
        }else{
            non(fev1_5);
        }
    });

    //���1/���� �������� ��������
    f�v_fvc1_1 = document.getElementById('f�v_fvc1_1');
    f�v_fvc1_1.addEventListener('input', function(){
        //ekg_hr_min = document.querySelectorAll();
        if(f�v_fvc1_1.value > 0.7){
            err(f�v_fvc1_1, '�������� ������ ���� ����� 0.7');
        }else{
            non(f�v_fvc1_1);
        }
    });
}


function err(error, mistake){
    error.style.background = 'red';
    parent = error.parentNode.parentNode;
    firstChild = parent.firstChild;
    el=document.createElement('img');
    el.setAttribute('src','http://'+document.domain+'/media/img/warning.png')
    el.setAttribute('class','war');
    if(document.querySelectorAll('.war').length == 0){
     parent.appendChild(el);
     el.addEventListener('mouseover', function(){alert(mistake)});
    }
}
function non(x){
    x.style.background = 'white';
    document.querySelector('.war').remove();
}
addEventListener('load', initiate);