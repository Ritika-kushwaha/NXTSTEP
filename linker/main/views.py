from django.shortcuts import render
def login_page(request):
    return render(request, 'loginpage.html') 
# Create your views here.
def third_main_page(request):
    return render(request, 'thirdmainpage.html')  # Render third main page

def symbol(request):
    return render(request, 'nxtsteplogo.jpg')  # Render symbol page

def forth_page(request):
    return render(request, 'forthpage.html')  # Render forth page

def explore_career_path(request):
    return render(request, 'fifthpage.html')  # Render explore career path page

def take_career_test(request):
    return render(request, 'sixthpage.html')  # Render take career test page