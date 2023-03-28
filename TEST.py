from collections import deque


def get_sub_eq(eq_str):
    st = deque()
    res = []

    for i, s in enumerate(eq_str):
        if s in ('(', '['):
            st.append(i)
        elif s in (')', ']'):
            res.append(eq_str[st.pop() + 1:i])

    return res


s = "2 + 3 * (1 - 5 - (3 * x - 5)) + (a - b)"
res = get_sub_eq(s)
print(res)