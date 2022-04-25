var id=0;
function Question(id1) {
    id=id1;
    document.getElementById('css-nbpydp').classList.remove('none');
    document.getElementById('css-nbpydp').classList.add('block');
};
var sign = 0;
var sign1 = 0;
var sign2 = 0;

function change() {
    if (sign == 0) {

        sign = 1;
        document.getElementById(id).classList.add('done');
        document.getElementById('markWord').textContent = "mark as pending";
        document.getElementById('mark').style.backgroundColor = 'red';
        document.getElementById('icon1').innerHTML =
            '<svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><g fill="currentColor"><path d="M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z"></path><path d="M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z"></path></g></svg>'
        document.getElementById('icon1').style.backgroundColor = 'red';
        if (sign1) {
            sign1 = 0;
            document.getElementById(id).classList.remove('done1');
            document.getElementById('markAdvanced').textContent = "Advanced";
            document.getElementById('markAdvanced').style.backgroundColor = 'yellowgreen';
        }
        if (sign2) {
            sign2 = 0;
            document.getElementById(id).classList.remove('done2');
            document.getElementById('markinter').textContent = "Intermediate";
            document.getElementById('markinter').style.backgroundColor = 'khaki';
        }

    } else {
        sign = 0;
        document.getElementById(id).classList.remove('done');
        document.getElementById('markWord').textContent = "mark as done";
        document.getElementById('mark').style.backgroundColor = 'green';
        document.getElementById('icon1').innerHTML =
            '<svg viewBox="0 0 14 14" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><g fill="currentColor"><polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon></g></svg>'
        document.getElementById('icon1').style.backgroundColor = 'green';
    }

};

function change2() {
    if (sign1 == 0) {
        sign1 = 1;
        document.getElementById(id).classList.add('done1');
        document.getElementById('markAdvanced').textContent = "Advanced as pending";
        document.getElementById('markAdvanced').style.backgroundColor = 'red';
        if (sign) {
            sign = 0;
            document.getElementById(id).classList.remove('done');
            document.getElementById('markWord').textContent = "mark as done";
            document.getElementById('mark').style.backgroundColor = 'green';
            document.getElementById('icon1').innerHTML =
                '<svg viewBox="0 0 14 14" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><g fill="currentColor"><polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon></g></svg>'
            document.getElementById('icon1').style.backgroundColor = 'green';
        }
        if (sign2) {
            sign2 = 0;
            document.getElementById(id).classList.remove('done2');
            document.getElementById('markinter').textContent = "Intermediate";
            document.getElementById('markinter').style.backgroundColor = 'khaki';
        }
    } else {
        sign1 = 0;
        document.getElementById(id).classList.remove('done1');
        document.getElementById('markAdvanced').textContent = "Advanced";
        document.getElementById('markAdvanced').style.backgroundColor = 'yellowgreen';
    }

};

function change3() {
    if (sign2 == 0) {
        sign2 = 1;
        document.getElementById(id).classList.add('done2');
        document.getElementById('markinter').textContent = "Intermediate as pending";
        document.getElementById('markinter').style.backgroundColor = 'red';
        if (sign) {
            sign = 0;
            document.getElementById(id).classList.remove('done');
            document.getElementById('markWord').textContent = "mark as done";
            document.getElementById('mark').style.backgroundColor = 'green';
            document.getElementById('icon1').innerHTML =
                '<svg viewBox="0 0 14 14" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><g fill="currentColor"><polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon></g></svg>'
            document.getElementById('icon1').style.backgroundColor = 'green';
        }
        if (sign1) {
            sign1 = 0;
            document.getElementById(id).classList.remove('done1');
            document.getElementById('markAdvanced').textContent = "Advanced";
            document.getElementById('markAdvanced').style.backgroundColor = 'yellowgreen';
        }
    } else {
        sign2 = 0;
        document.getElementById(id).classList.remove('done2');
        document.getElementById('markinter').textContent = "Intermediate";
        document.getElementById('markinter').style.backgroundColor = 'khaki';
    }

};

function close() {
    document.getElementById('css-nbpydp').classList.remove('block');
    document.getElementById('css-nbpydp').classList.add('none');
}