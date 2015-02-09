#Support Android 5 L 

![](ThemeColors.png)

## What you will need.
You will need to update your **android tools and grab the android 21 version**, you can do that via Studio.

Also you will need to install the master git to get the lasted bleeding edge sdk version:
## Install bleeding edge sdk
<pre>$ titanium sdk install --branch master --default</pre>

Do not forget to change the sdk version in tiapp.xml according.
###Min required:

``<sdk-version>3.6.0.v20150129165610</sdk-version>``


![](https://s3.amazonaws.com/f.cl.ly/items/3G2h0B1H2c1h1D2b1x46/Image%202015-02-09%20at%202.46.15%20PM.png)

![](https://s3.amazonaws.com/f.cl.ly/items/2m3F211d0W3o2Z1N0Q47/Image%202015-02-09%20at%202.46.41%20PM.png)




# "wintest.apk" Demo App for [Ti.DrawerLayout](https://github.com/nuno/Ti.DrawerLayout-Demo-Alloy-App/blob/master/wintest.apk)

This is a demo application for showing how to use [https://github.com/manumaticx/Ti.DrawerLayout](https://github.com/manumaticx/Ti.DrawerLayout)

It shows how to use the drawer for navigation. The left view of the drawer layout works as a menu that lets you switch between top-level views. Each content view is represented as an element in the menu.

Every content view is a separate controller which can have its own ActionBar setup and optionsMenu. We also want to achieve to add a consistent Overflow menu with standard action items like Help and Settings, according to the [Android Design Guidelines](http://developer.android.com/design/patterns/navigation-drawer.html) (Notice how the overflow menu stays visible as the Drawer layout expands while the contextual action items gets removed from the action bar).

Opening and closing the controllers for the content view is done by a global open method in `alloy.js`. It expects each controller to have an public `init` and `destroy` method. That way we can keep it clean and responsive.

![](demo.gif)

### Limitations

I tried to make the drawer menu accessible from deeper-level views such as from a second window (e.g. detail window). You can't just add the global drawer reference to this. One workaround could be adding a new drawer instance with the same menu controller in it but this could become dangerous and complex. In a native app you'd use fragments. It's also possible to use activities but I need to think about how this could be accomplished from the module.

### License

    The MIT License (MIT)

    Copyright (c) 2014 Manuel Lehner

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
