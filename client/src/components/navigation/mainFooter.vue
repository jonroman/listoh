<template>
<footer class="page-footer font-small stylish-color-dark pt-4 mt-4">
    <!--Footer Links-->
    <div class="container text-center text-md-left">
        <div class="row">
            <!--First column-->
            <div class="col-md-4">
                <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit.</p>
            </div>
            <!--/.First column-->
            <hr class="clearfix w-100 d-md-none">
            <!--Second column-->
            <div class="col-md-2 mx-auto">
                <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                <ul class="list-unstyled">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/posts">View Posts</a>
                    </li>
                    <li>
                        <a href="/posts/new">Add Post </a>
                    </li>
                    <li>
                        <a href="#!">Link 4</a>
                    </li>
                </ul>
            </div>
            <!--/.Second column-->
            <hr class="clearfix w-100 d-md-none">
        </div>
    </div>
    <!--/.Footer Links-->
    <!--Social buttons-->
    <div class="text-center">
        <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
                <a class="btn-floating btn-sm btn-fb mx-1">
                    <i class="fa fa-facebook"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-sm btn-tw mx-1">
                    <i class="fa fa-twitter"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-sm btn-gplus mx-1">
                    <i class="fa fa-google-plus"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-sm btn-li mx-1">
                    <i class="fa fa-linkedin"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-sm btn-dribbble mx-1">
                    <i class="fa fa-dribbble"> </i>
                </a>
            </li>
        </ul>
    </div>
    <!--/.Social buttons-->
    <!--Copyright-->
    <div class="footer-copyright py-3 text-center">
        © 2018 Copyright: Listollia
    </div>
    <!--/.Copyright-->
</footer>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
    }
  }
};
</script>