Treeview examples in pure CSS3
==============================

Imageless CSS3 Checkbox Treeview
--------------------------------

Go to the website <http://experiments.wemakesites.net/css3-treeview-with-multiple-node-selection.html>.

### CSS3

```css
/*
 * Imageless CSS3 Treeview with Checkbox Support
 * @namespace window.AcidJs
 * @class CSS3Treeview
 * @version 3.0
 * @author Martin Ivanov
 * @url developer website: http://wemakesites.net/
 * @url developer twitter: https://twitter.com/#!/wemakesitesnet
 * @url developer blog http://acidmartin.wordpress.com/
 **/

/*
 * Do you like this solution? Please, donate:
 * https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QFUHPWJB2JDBS
 **/

.acidjs-css3-treeview,
.acidjs-css3-treeview *
{
    padding: 0;
    margin: 0;
    list-style: none;
}

.acidjs-css3-treeview label[for]::before,
.acidjs-css3-treeview label span::before
{
    content: "\25b6";
    display: inline-block;
    margin: 2px 0 0;
    width: 13px;
    height: 13px;
    vertical-align: top;
    text-align: center;
    color: #e74c3c;
    font-size: 8px;
    line-height: 13px;
}

.acidjs-css3-treeview li ul
{
    margin: 0 0 0 22px;
}

.acidjs-css3-treeview *
{
    vertical-align: middle;
}

.acidjs-css3-treeview
{
    font: normal 11px/16px "Segoe UI", Arial, Sans-serif;
}

.acidjs-css3-treeview li
{
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.acidjs-css3-treeview input[type="checkbox"]
{
    display: none;
}

.acidjs-css3-treeview label
{
    cursor: pointer;
}

.acidjs-css3-treeview label[for]::before
{
    -webkit-transform: translatex(-24px);
    -moz-transform: translatex(-24px);
    -ms-transform: translatex(-24px);
    -o-transform: translatex(-24px);
    transform: translatex(-24px);
}

.acidjs-css3-treeview label span::before
{
    -webkit-transform: translatex(16px);
    -moz-transform: translatex(16px);
    -ms-transform: translatex(16px);
    -o-transform: translatex(16px);
    transform: translatex(16px);
}

.acidjs-css3-treeview input[type="checkbox"][id]:checked ~ label[for]::before
{
    content: "\25bc";
}

.acidjs-css3-treeview input[type="checkbox"][id]:not(:checked) ~ ul
{
    display: none;
}

.acidjs-css3-treeview label:not([for])
{
    margin: 0 8px 0 0;
}

.acidjs-css3-treeview label span::before
{
    content: "";
    border: solid 1px #1375b3;
    color: #1375b3;
    opacity: .50;
}

.acidjs-css3-treeview label input:checked + span::before
{
    content: "\2714";
    box-shadow: 0 0 2px rgba(0, 0, 0, .25) inset;
    opacity: 1;
}
```

### HTML

```html
<div class="acidjs-css3-treeview">
    <ul>
        <li>
            <input type="checkbox" id="node-0" checked="checked" /><label><input type="checkbox" /><span></span></label><label for="node-0">Libraries</label>
            <ul>
                <li>
                    <input type="checkbox" id="node-0-0" checked="checked" /><label><input type="checkbox" /><span></span></label><label for="node-0-0">Documents</label>
                    <ul>
                        <li>
                            <input type="checkbox" id="node-0-0-0" checked="checked" /><label><input type="checkbox" /><span></span></label><label for="node-0-0-0">My Documents</label>
                            <ul>
                                <li>
                                    <input type="checkbox" id="node-0-0-0-0" /><label><input type="checkbox" /><span></span></label><label for="node-0-0-0-0">Downloads</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="node-0-0-0-1" /><label><input type="checkbox" /><span></span></label><label for="node-0-0-0-1">Projects</label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="node-0-1" /><label><input type="checkbox" /><span></span></label><label for="node-0-1">Music</label>
                    <ul>
                        <li>
                            <input type="checkbox" id="node-0-1-0" /><label><input type="checkbox" /><span></span></label><label for="node-0-1-0">My Music</label>
                        </li>
                        <li>
                            <input type="checkbox" id="node-0-1-1" /><label><input type="checkbox" /><span></span></label><label for="node-0-1-1">Public Music</label>
                        </li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="node-0-2" /><label><input type="checkbox" /><span></span></label><label for="node-0-2">Pictures</label>
                    <ul>
                        <li>
                            <input type="checkbox" id="node-0-2-0" /><label><input type="checkbox" /><span></span></label><label for="node-0-2-0">My Pictures</label>
                        </li>
                        <li>
                            <input type="checkbox" id="node-0-2-1" /><label><input type="checkbox" /><span></span></label><label for="node-0-2-1">Public Pictures</label>
                        </li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="node-0-3" checked="checked" /><label><input type="checkbox" checked="checked" /><span></span></label><label for="node-0-3">Video</label>
                    <ul>
                        <li>
                            <input type="checkbox" id="node-0-3-0" /><label><input type="checkbox" checked="checked" /><span></span></label><label for="node-0-3-0">My Videos</label>
                        </li>
                        <li>
                            <input type="checkbox" id="node-0-3-1" /><label><input type="checkbox" checked="checked" /><span></span></label><label for="node-0-3-1">Public Videos</label>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
```

CSS3 Treeview from images
-------------------------

Or goto the website <http://experiments.wemakesites.net/css3-treeview.html>.

### CSS

```css
/*
 * CSS3 Treeview. No JavaScript
 * @version 1.0
 * @author Martin Ivanov
 * @url developer's website: http://wemakesites.net/
 * @url developer's twitter: https://twitter.com/#!/wemakesitesnet
 * @url developer's blog http://acidmartin.wordpress.com/
 **/

/*
 * This solution works with all modern browsers and Internet Explorer 9+.
 * If you are interested in purchasing a JavaScript enabler for IE8
 * for the CSS3 Treeview, please, check this link:
 * http://experiments.wemakesites.net/miscellaneous/acidjs-css3-treeview/
 **/

.css-treeview ul,
.css-treeview li
{
    padding: 0;
    margin: 0;
    list-style: none;
}

.css-treeview input
{
    position: absolute;
    opacity: 0;
}

.css-treeview
{
    font: normal 11px "Segoe UI", Arial, Sans-serif;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.css-treeview a
{
    color: #00f;
    text-decoration: none;
}

.css-treeview a:hover
{
    text-decoration: underline;
}

.css-treeview input + label + ul
{
    margin: 0 0 0 22px;
}

.css-treeview input ~ ul
{
    display: none;
}

.css-treeview label,
.css-treeview label::before
{
    cursor: pointer;
}

.css-treeview input:disabled + label
{
    cursor: default;
    opacity: .6;
}

.css-treeview input:checked:not(:disabled) ~ ul
{
    display: block;
}

.css-treeview label,
.css-treeview label::before
{
    background: url("../pages/css3-treeview/example/icons.png") no-repeat;
}

.css-treeview label,
.css-treeview a,
.css-treeview label::before
{
    display: inline-block;
    height: 16px;
    line-height: 16px;
    vertical-align: middle;
}

.css-treeview label
{
    background-position: 18px 0;
}

.css-treeview label::before
{
    content: "";
    width: 16px;
    margin: 0 22px 0 0;
    vertical-align: middle;
    background-position: 0 -32px;
}

.css-treeview input:checked + label::before
{
    background-position: 0 -16px;
}

/* webkit adjacent element selector bugfix */
@media screen and (-webkit-min-device-pixel-ratio:0)
{
    .css-treeview
    {
        -webkit-animation: webkit-adjacent-element-selector-bugfix infinite 1s;
    }

    @-webkit-keyframes webkit-adjacent-element-selector-bugfix
    {
        from
        {
            padding: 0;
        }
        to
        {
            padding: 0;
        }
    }
}
```

### HTML

```html
<div class="css-treeview">
    <ul>
        <li><input type="checkbox" id="item-0" /><label for="item-0">This Folder is Closed By Default</label>
            <ul>
                <li><input type="checkbox" id="item-0-0" /><label for="item-0-0">Ooops! A Nested Folder</label>
                    <ul>
                        <li><input type="checkbox" id="item-0-0-0" /><label for="item-0-0-0">Look Ma - No Hands!</label>
                            <ul>
                                <li><a href="./">First Nested Item</a></li>
                                <li><a href="./">Second Nested Item</a></li>
                                <li><a href="./">Third Nested Item</a></li>
                                <li><a href="./">Fourth Nested Item</a></li>
                            </ul>
                        </li>
                        <li><a href="./">Item 1</a></li>
                        <li><a href="./">Item 2</a></li>
                        <li><a href="./">Item 3</a></li>
                    </ul>
                </li>
                <li><input type="checkbox" id="item-0-1" /><label for="item-0-1">Yet Another One</label>
                    <ul>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                    </ul>
                </li>
                <li><input type="checkbox" id="item-0-2" disabled="disabled" /><label for="item-0-2">Disabled Nested Items</label>
                    <ul>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                    </ul>
                </li>
                <li><a href="./">item</a></li>
                <li><a href="./">item</a></li>
                <li><a href="./">item</a></li>
                <li><a href="./">item</a></li>
        </ul>
</li>
<li><input type="checkbox" id="item-1" checked="checked" /><label for="item-1">This One is Open by Default...</label>
        <ul>
            <li><input type="checkbox" id="item-1-0" /><label for="item-1-0">And Contains More Nested Items...</label>
                <ul>
                    <li><a href="./">Look Ma - No Hands</a></li>
                    <li><a href="./">Another Item</a></li>
                    <li><a href="./">And Yet Another</a></li>
                </ul>
            </li>
            <li><a href="./">Lorem</a></li>
            <li><a href="./">Ipsum</a></li>
            <li><a href="./">Dolor</a></li>
            <li><a href="./">Sit Amet</a></li>
        </ul>
</li>
<li><input type="checkbox" id="item-2" /><label for="item-2">Can You Believe...</label>
        <ul>
                <li><input type="checkbox" id="item-2-0" /><label for="item-2-0">That This Treeview...</label>
                    <ul>
                        <li><input type="checkbox" id="item-2-2-0" /><label for="item-2-2-0">Does Not Use Any JavaScript...</label>
                            <ul>
                                <li><a href="./">But Relies Only</a></li>
                                <li><a href="./">On the Power</a></li>
                                <li><a href="./">Of CSS3</a></li>
                            </ul>
                        </li>
                        <li><a href="./">Item 1</a></li>
                        <li><a href="./">Item 2</a></li>
                        <li><a href="./">Item 3</a></li>
                    </ul>
                </li>
                <li><input type="checkbox" id="item-2-1" /><label for="item-2-1">This is a Folder With...</label>
                    <ul>
                        <li><a href="./">Some Nested Items...</a></li>
                        <li><a href="./">Some Nested Items...</a></li>
                        <li><a href="./">Some Nested Items...</a></li>
                        <li><a href="./">Some Nested Items...</a></li>
                        <li><a href="./">Some Nested Items...</a></li>
                    </ul>
                </li>
                <li><input type="checkbox" id="item-2-2" disabled="disabled" /><label for="item-2-2">Disabled Nested Items</label>
                    <ul>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                        <li><a href="./">item</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
```

CSS3 Kobus Treeview
-------------------

Or goto the website <https://codepen.io/kobusvanwykk/pen/NqXVNQ>.

### CSS

```css
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css";
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css";
ul.tree {
	margin: 0;
	padding: 2px 20px;
	li {
		list-style: none;
		margin-left: -15px;
		position: relative;


		input {
			cursor: pointer;
			height: 1em;
			left: 0;
			margin-left: 0;
			opacity: 0;
			position: absolute;
			top: 0;
			width: 2em;
			z-index: 2;
			&:checked+ul {
				height: auto;
				margin: 0px 0px 0px -19px;
				&:before {
					content: "\f068"; //MINUS
					font-family: Fontawesome;
					font-size: 15px;
					left: 0;
					margin-right: 5px;
					position: absolute;
					top: 0;
				}
			}
			&:checked+ul>li {
				display: block;
				left: -3px;
				margin: 0 0 3px;
				last-child {
					margin: 0 0 .063em;
				}
			}
		}
		input+ul {
			padding: 0 0 0 39px;
			&:before {
				content: "\f067"; //PLUS
				font-family: Fontawesome;
				font-size: 15px;
				left: 0;
				margin-right: 5px;
				position: absolute;
				top: 0;
			}
		}
		input+ul>li {
			display: none;
			margin-left: -10px;
			padding-left: 1px;
		}
		label {
			cursor: pointer;
			margin-bottom: 0;
			margin-left: 17px;
		}
	}
}
ul.tree>li {
	margin-left: -1px !important;
	a {
		color: #606061;
		display: block;
		text-decoration: none;
		&:before {
			content: ""; //HAMBURGER \f0c9
			display: block;
			float: left;
			font-family: Fontawesome;
			font-size: 15px;
			margin-right: 5px;
		}
	}

}
ul.tree>li {
 &>a:before {
   content: "\f0c9"; //HAMBURGER \f0c9
   display: block;
			float: left;
			font-family: Fontawesome;
			font-size: 15px;
			margin-right: 5px;
  }
}

ul.tree {
  &>li>a>label {
    margin-left: 0;
  }
}

ul.tree {
  &>li>ul>li>a>label:before,
  &>li>ul>li>ul>li>a>label:before
  {
    content: "\f0c9"; //HAMBURGER \f0c9
   display: block;
			position: absolute;
			font-family: Fontawesome;
			font-size: 15px;
			margin-right: 5px;
    left: 0px;
  }
}
```

### HTML

```html
<ul class="tree">
   <li id="menu12">
      <label for="menu12">
      <a>2015</a>
      </label>
      <input checked="" id="menu12" value="" type="checkbox">
      <ul>
         <li id="menu13">
            <label for="menu13"><a>December</a></label>
            <input checked="" id="menu13" value="" type="checkbox">
            <ul>
               <li id="menu14">
                  <a>
                  <label for="menu14">Video</label>
                  <input checked="" id="menu14" value="" type="checkbox">
                  </a>
               </li>
              <li id="menu15">
                  <a>
                  <label for="menu14">Video</label>
                  <input checked="" id="menu14" value="" type="checkbox">
                  </a>
               </li>
            </ul>
         </li>
      </ul>
   </li>
   <li id="menu15">
      <label for="menu15"><a>2014</a></label>
      <input checked="" id="menu15" value="" type="checkbox">
      <ul>

         <li id="menu17">
            <label for="menu17"><a>October</a></label>
            <input checked="" id="menu17" value="" type="checkbox">
            <ul>
               <li id="menu18">
                  <a><label for="menu18">Video</label>
                  <input checked="" id="menu18" value="" type="checkbox">
                  </a>

               </li>
              <li id="menu18">
                  <a><label for="menu18">Video</label>
                  <input checked="" id="menu18" value="" type="checkbox">
                  </a>
               </li>
            </ul>
         </li>
      </ul>
   </li>
  <li id="menu20">
    <a><label for="menu20">2013</label>
      <input checked="" id="menu20" value="" type="checkbox">
    </a>
  </li>
</ul>
```

Some Extra CSS Wizardry
-----------------------

* [Quantity Queries for CSS](https://alistapart.com/article/quantity-queries-for-css)
* [Optimizing CSS: Tweaking Animation Performance with DevTools](https://www.sitepoint.com/check-css-animation-performance-with-the-browsers-dev-tools/)
